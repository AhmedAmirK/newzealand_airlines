  
App.controller('paymentCtrl', function($scope, $location , FlightsSrv,$window){

  $scope.OutFlight= FlightsSrv.getOutFlight();
  $scope.Seat = FlightsSrv.getSeat();
  $scope.OutClass = FlightsSrv.getOutClass();
  
  if($scope.OutClass=="First")
    $scope.price = $scope.OutFlight.price.first;
  else $scope.price = $scope.OutFlight.price.economy;


 FlightsSrv.bookFlight($scope.OutFlight.flightNumber,$scope.OutFlight.departuredatetime,$scope.email,$scope.price,$scope.OutClass).success(function(){
  console.log("Success");
 });

  if(FlightsSrv.getIfRoundTrip()){
  	$scope.RetFlight = FlightsSrv.getRetFlight();
  	$scope.RetClass = FlightsSrv.getRetClass();

    if($scope.RetClass=="First")
      $scope.price2 = $scope.RetFlight.price.first;
    else $scope.price2 = $scope.RetFlight.price.economy;

    $scope.TotalPrice = $scope.price + $scope.price2;

    FlightsSrv.bookFlight($scope.RetFlight.flightNumber,$scope.RetFlight.departuredatetime,$scope.email,$scope.price2,$scope.RetClass).success(function(){
  console.log("Success");
 });
    }

  $scope.confirm= function(){
  	$window.alert("Payment Completed Succesfully! You will receive your ticket shortly by email Thank You for choosing New Zealand Air!");
  }
});