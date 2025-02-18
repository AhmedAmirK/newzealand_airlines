  
App.controller('paymentCtrl', function($scope, $location , FlightsSrv,$window){

  $scope.open1 = function() {
  $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.OutFlight= FlightsSrv.getOutFlight();
  $scope.Seat = FlightsSrv.getSeat();


  if(FlightsSrv.getIfRoundTrip()){

  	$scope.RetFlight = FlightsSrv.getRetFlight();

    $scope.TotalPrice = $scope.OutFlight.cost + $scope.RetFlight.cost;

  
    }

  $scope.confirm = function(){

    if($scope.clientEmail==undefined || $scope.clientFName==undefined || $scope.clientLName==undefined || $scope.clientCNum==undefined || $scope.clientPNum==undefined || $scope.clientSNum==undefined || $scope.clientExpMonth==undefined || $scope.clientExpYear==undefined|| $scope.clientBDate==undefined){
      $window.alert("Please Fill out all fields!");
      
    }

else{

  if (FlightsSrv.getIfRoundTrip()) {
         FlightsSrv.bookFlight($scope.OutFlight.flightId,
                            $scope.RetFlight.flightId,
                           $scope.OutFlight.cost,
                           $scope.OutFlight.class,
                           $scope.clientEmail,
                           $scope.clientFName,
                           $scope.clientLName,
                           $scope.clientBDate,
                           $scope.clientCNum,
                           $scope.clientPNum,
                           $scope.clientSNum,
                           $scope.clientExpMonth,
                           $scope.clientExpYear
                          );

  }
    else{
          FlightsSrv.bookFlight($scope.OutFlight.flightId,
                            undefined,
                           $scope.OutFlight.cost,
                           $scope.OutFlight.class,
                           $scope.clientEmail,
                           $scope.clientFName,
                           $scope.clientLName,
                           $scope.clientBDate,
                           $scope.clientCNum,
                           $scope.clientPNum,
                           $scope.clientSNum,
                           $scope.clientExpMonth,
                           $scope.clientExpYear
                          );
}
 

      
        FlightsSrv.getCurrentBookingRefNum().success(function(obj){
      var num = obj['num'];
      $window.alert("Payment Completed Succesfully . Your booking reference number is "+ num +
                    " remember this number to search for your booking later on . Thank You for choosing New Zealand Air");
    });
    

     $location.url('/');
  	} 
  };

});