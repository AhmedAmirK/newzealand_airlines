  
App.controller('paymentCtrl', function($scope, $state , FlightsSrv,$window){

  $scope.open1 = function() {
  $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };


  $scope.OutFlight= FlightsSrv.getOutFlight();
  $scope.Seat = FlightsSrv.getSeat();
  $scope.input={};

  if(FlightsSrv.getIfRoundTrip()){

  	$scope.RetFlight = FlightsSrv.getRetFlight();

    $scope.TotalPrice = $scope.OutFlight.cost + $scope.RetFlight.cost;

  
    }

  $scope.confirm = function(){

    if($scope.input.emailAddress==undefined || $scope.input.firstName==undefined || $scope.input.lastName==undefined || $scope.input.cardNumber==undefined || $scope.input.passportNumber==undefined || $scope.input.securityNumber==undefined){
      $window.alert("Please fill out all the fields");
      
    }
else{
     FlightsSrv.bookFlight($scope.OutFlight.flightNumber,
                           $scope.OutFlight.cost,
                           $scope.OutFlight.class,
                           $scope.input.emailAddress,
                           $scope.input.firstName,
                           $scope.input.lastName,
                           $scope.input.cardNumber,
                           $scope.input.passportNumber,
                           $scope.input.securityNumber
                          );

     if(FlightsSrv.getIfRoundTrip()){

        FlightsSrv.bookFlight($scope.RetFlight.flightNumber,$scope.input.clientEmail,$scope.RetFlight.cost,$scope.RetFlight.class);

        FlightsSrv.getCurrentBookingRefNum().success(function(obj){
          var ret = obj['num'] - 1 , out = ret - 1;
          $window.alert("Payment Completed Succesfully . Your outgoing booking reference number is "+ out +
                        " and your returning booking reference number is " + ret +
                        " remember these numbers to search for your bookings later on . Thank You for choosing New Zealand Air");
        });

     }
     
     else{
        FlightsSrv.getCurrentBookingRefNum().success(function(obj){
          var num = obj['num'] - 1;
          $window.alert("Payment Completed Succesfully . Your booking reference number is "+ num +
                        " remember this number to search for your booking later on . Thank You for choosing New Zealand Air");
        });
     }

     $state.go('app');

  	} 
  };

});