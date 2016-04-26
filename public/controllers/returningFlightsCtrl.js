App.controller('returningFlightsCtrl', function ($scope , FlightsSrv,$location,$window) {

    FlightsSrv.searchFlights().success(function(Flights) {
         $scope.RFlights = Flights.returnFlights;
         if($scope.RFlights.length == 0){
            $window.alert('We did not find any results matching your search !');
         }
     
   });

    $scope.setFlight = function(value){
    		FlightsSrv.setRetFlight(value);
    		$location.url('/bookingboth');
   };
    
});