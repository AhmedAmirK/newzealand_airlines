App.controller('returningFlightsCtrl', function ($scope , FlightsSrv,$location) {

    FlightsSrv.getReturningFlights().success(function(RetFlights) {
         $scope.RFlights = RetFlights;
     });

    $scope.setFlight = function(value){
      FlightsSrv.setFlight(value);
      $location.url('/booking');
    };
    
});