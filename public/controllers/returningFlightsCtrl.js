App.controller('returningFlightsCtrl', function ($scope , FlightsSrv,$location) {

    FlightsSrv.searchFlights().success(function(Flights) {
         $scope.RFlights = Flights.returningFlights;
     
   });

    $scope.setFlight = function(value){

    		FlightsSrv.setRetFlight(value);
    		$location.url('/bookingboth');
   };
    
});