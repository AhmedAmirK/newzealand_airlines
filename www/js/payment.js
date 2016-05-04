  
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

    if($scope.input.emailAddress==undefined || $scope.input.firstName==undefined || $scope.input.lastName==undefined || $scope.input.cardNumber==undefined || $scope.input.passportNumber==undefined || $scope.input.securityNumber==undefined || $scope.input.clientExpMonth==undefined || $scope.input.clientExpYear==undefined || $scope.input.birthDate==undefined){
      $window.alert("Please fill out all the fields");
      
    }
else{
     if(FlightsSrv.getIfRoundTrip()){
             FlightsSrv.bookFlight(
                           $scope.OutFlight.flightId,
                           $scope.RetFlight.flightId,  
                           $scope.OutFlight.cost,
                           $scope.OutFlight.class,
                           $scope.input.emailAddress,
                           $scope.input.firstName,
                           $scope.input.lastName,
                           $scope.input.birthDate,
                           $scope.input.cardNumber,
                           $scope.input.passportNumber,
                           $scope.input.securityNumber,
                           $scope.input.clientExpMonth,
                           $scope.input.clientExpYear
                          );
     }
     else{
               FlightsSrv.bookFlight($scope.OutFlight.flightId,
                           undefined,
                           $scope.OutFlight.cost,
                           $scope.OutFlight.class,
                           $scope.input.emailAddress,
                           $scope.input.firstName,
                           $scope.input.lastName,
                           $scope.input.birthDate,
                           $scope.input.cardNumber,
                           $scope.input.passportNumber,
                           $scope.input.securityNumber,
                           $scope.input.clientExpMonth,
                           $scope.input.clientExpYear
                          );
     }

      FlightsSrv.getCurrentBookingRefNum().success(function(obj){
      var num = obj['num'];
      $window.alert("Payment Completed Succesfully . Your booking reference number is "+ num +
                    " remember this number to search for your booking later on . Thank You for choosing New Zealand Air");
    });

     $state.go('app.search');

  	} 
  };

});