  
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

  $scope.confirm= function(){
     FlightsSrv.bookFlight($scope.OutFlight.flightNumber,$scope.email,$scope.price,$scope.OutClass);
     if(FlightsSrv.getIfRoundTrip())
     FlightsSrv.bookFlight($scope.RetFlight.flightNumber,$scope.email,$scope.price,$scope.RetClass);
  	$window.alert("Payment Completed Succesfully! You will receive your ticket shortly by email Thank You for choosing New Zealand Air!");
  }
});