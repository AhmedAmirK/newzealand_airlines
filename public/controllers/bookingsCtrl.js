App.controller('bookingsCtrl', function($scope, $location , FlightsSrv){

    $scope.Flight= FlightsSrv.getFlight();
    $scope.selectedSeat = "Window";
    FlightsSrv.setSeat($scope.selectedSeat);
    $scope.selectedClass = "Economy";
    FlightsSrv.setClass($scope.selectedClass);
   $scope.selectSeat= function(){
   	FlightsSrv.setSeat($scope.selectedSeat);
   	
   }
   $scope.selectClass= function(){
   	FlightsSrv.setClass($scope.selectedClass);
   }

});