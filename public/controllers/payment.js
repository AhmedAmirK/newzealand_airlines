  
App.controller('paymentCtrl', function($scope, $location , FlightsSrv,$window){

  $scope.OutFlight= FlightsSrv.getOutFlight();
  $scope.Seat = FlightsSrv.getSeat();
  $scope.OutClass = FlightsSrv.getOutClass();
  $scope.TotalPrice = 
  if(FlightsSrv.getIfRoundTrip()){
  	$scope.RetFlight = FlightsSrv.getRetFlight();
  	$scope.RetClass = FlightsSrv.getRetClass();
  }

  $scope.confirm= function(){
  	$window.alert("Payment Completed Succesfully! You will receive your ticket shortly by email Thank You for choosing New Zealand Air!");
  }
});