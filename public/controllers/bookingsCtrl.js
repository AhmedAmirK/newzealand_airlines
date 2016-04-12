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
   }
   $scope.selectRetClass= function(){
    FlightsSrv.setRetClass($scope.selectedClass2);
   }

});