
App.controller('outgoingFlightsCtrl', function ($scope , FlightsSrv,$location) {
    $scope.OFlights = [];
    
    FlightsSrv.searchFlights().success(function(Flights) {

    		$scope.OFlights = Flights.outgoingFlights;

  		   });


    $scope.setFlight = function(num){
      FlightsSrv.setOutFlight(num);
      if(FlightsSrv.getIfRoundTrip()){
        $location.url('/return');
      }
     else $location.url('/booking');
    }

});