
App.controller('outgoingFlightsCtrl', function ($scope , FlightsSrv,$location) {
    $scope.OFlights = [];
    var temp=[];
    FlightsSrv.getOutgoingFlights().success(function(OutFlights) {
    		$scope.OFlights = OutFlights;
    		

  		   var destination = FlightsSrv.getSelectedDestinationAirport();
  		   var origin = FlightsSrv.getSelectedOriginAirport();
  		   OutFlights.forEach(function(flight){
  			 if(flight.From==origin && flight.To == destination ){
    			 temp.push(flight);
  			 }
  		   });

      if (FlightsSrv.getSearchOut()) 
      {
        $scope.OFlights = temp;
      }
	});

    $scope.setFlight = function(num){
      FlightsSrv.setOutFlight(num);
      if(FlightsSrv.getIfRoundTrip()){
        $location.url('/return');
      }
     else $location.url('/booking');
    }

});