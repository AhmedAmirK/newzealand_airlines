App.controller('bookingsCtrl', function($scope, $location , FlightsSrv){

    $scope.OutFlight= FlightsSrv.getOutFlight();
    $scope.RetFlight=FlightsSrv.getRetFlight();
    $scope.selectedSeat = "Window";
    FlightsSrv.setSeat($scope.selectedSeat);
    $scope.selectedClass1 = "Economy";
    FlightsSrv.setOutClass($scope.selectedClass1);
    $scope.selectedClass2 = "Economy";
    FlightsSrv.setRetClass($scope.selectedClass2);



   $scope.selectSeat= function(){
   	FlightsSrv.setSeat($scope.selectedSeat);
   	
   }
   $scope.selectOutClass= function(){
   	FlightsSrv.setOutClass($scope.selectedClass1);
    if($scope.selectedClass1=="Economy")
      $scope.price = $scope.OutFlight.price.economy;
    else $scope.price = $scope.OutFlight.price.first;
   }
   $scope.selectRetClass= function(){
    FlightsSrv.setRetClass($scope.selectedClass2);
    if($scope.selectedClass2=="Economy")
      $scope.price2 = $scope.RetFlight.price.economy;
    else $scope.price2 = $scope.RetFlight.price.first;
   }
   $scope.bookFlights= function(){
    if(FlightsSrv.getIfRoundTrip())
      $location.url('/paymentTwoWay');
    else $location.url('/payment');
   }

});