
App.controller('mainCtrl', function($scope, FlightsSrv, $location) {

  $scope.format = 'dd-MMMM-yyyy';

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate1 = function(year, month, day) {
    $scope.date1 = new Date(year, month, day);
  };
  $scope.setDate2 = function(year,month,day){
    $scope.date2 = new Date(year,month,day);
    $scope.message = $scope.date2
  }

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  function AirportCodes() {
    FlightsSrv.getAirportCodes().success(function(airports) {
         $scope.Airports = airports;
     });
  };

  $scope.SetOriginAirport = function(originAirport) {
    FlightsSrv.setSelectedOriginAirport(originAirport);
  };

  $scope.SetDestinationAirport = function(destAirport) {
    FlightsSrv.setSelectedDestinationAirport(destAirport);
  };

  $scope.SearchFlights = function() {
    FlightsSrv.setSearchOut(true);
    FlightsSrv.setDate1($scope.date1);
    FlightsSrv.setDate2($scope.date2);
    $location.url('/out');
  };


  AirportCodes();
  FlightsSrv.setSearchOut(false);

});
