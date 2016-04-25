  
App.controller('paymentCtrl', function($scope, $location , FlightsSrv,$window){

  $scope.OutFlight= FlightsSrv.getOutFlight();
  $scope.Seat = FlightsSrv.getSeat();
  $scope.OutClass = FlightsSrv.getOutClass();
  
  if($scope.OutClass=="First")
    $scope.price = $scope.OutFlight.price.first;
  else $scope.price = $scope.OutFlight.price.economy;



  if(FlightsSrv.getIfRoundTrip()){
  	$scope.RetFlight = FlightsSrv.getRetFlight();
  	$scope.RetClass = FlightsSrv.getRetClass();

    if($scope.RetClass=="First")
      $scope.price2 = $scope.RetFlight.price.first;
    else $scope.price2 = $scope.RetFlight.price.economy;

    $scope.TotalPrice = $scope.price + $scope.price2;

  
    }

  $scope.confirm = function(){
     FlightsSrv.bookFlight($scope.OutFlight.flightNumber,$scope.clientEmail,$scope.price,$scope.OutClass);
     if(FlightsSrv.getIfRoundTrip())
        FlightsSrv.bookFlight($scope.RetFlight.flightNumber,$scope.clientEmail,$scope.price,$scope.RetClass);

     FlightsSrv.getCurrentBookingRefNum().success(function(obj){
          console.log(obj);
          var num = obj['num'] - 1;
          $window.alert("Payment Completed Succesfully . Your booking refernce number is "+ num +" remember this number to search for your booking later on . Thank You for choosing New Zealand Air !");
     });
  	 
  }

});