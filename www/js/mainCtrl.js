

App.controller('mainCtrl', function($scope, FlightsSrv, $state) {

  $scope.format = 'shortDate';
  $scope.selectedClass = "economy";
  FlightsSrv.setOutClass("economy");
  $scope.input={};
 

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };



  $scope.SearchFlights = function() {
    FlightsSrv.setSelectedOriginAirport($scope.input.selectedOrigin);
    FlightsSrv.setSelectedDestinationAirport($scope.input.selectedDestination);
    FlightsSrv.setSearchOut(true);
    FlightsSrv.setDate1($scope.input.date1);
    FlightsSrv.setDate2($scope.input.date2);
    $state.go('app.outgoing');
  };

  $scope.setOtherAir= function(){
    FlightsSrv.setOtherAir($scope.input.Other);
  };

  $scope.setRoundTrip = function() {
    FlightsSrv.setIfRoundTrip($scope.input.Round);
  };

  $scope.selectClass = function(){
    FlightsSrv.setOutClass($scope.selectedClass);
  };

  FlightsSrv.setSearchOut(false);
  FlightsSrv.setIfRoundTrip(false);
  FlightsSrv.setOtherAir(false);

});
