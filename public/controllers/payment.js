  
App.controller('paymentCtrl', function($scope, $location , FlightsSrv,$window){

  $scope.Flight= FlightsSrv.getFlight();
  $scope.Seat = FlightsSrv.getSeat();
  $scope.Class = FlightsSrv.getClass();

  $scope.confirm= function(){
  	$window.alert("Payment Completed Succesfully! You will receive your ticket shortly by email Thank You for choosing New Zealand Air!");
  }
});