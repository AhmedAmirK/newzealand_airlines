

App.controller('mainCtrl', function($scope, FlightsSrv, $location) {

  $scope.format = 'shortDate';

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


  function AirportCodes(){
    FlightsSrv.getAirportCodes().success(function(airports) {
         $scope.Airports = airports;
     });
  }

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

  $scope.setRoundTrip = function() {
    FlightsSrv.setIfRoundTrip($scope.Round);
  };


  AirportCodes();
  FlightsSrv.setSearchOut(false);
  FlightsSrv.setIfRoundTrip(false);

});
