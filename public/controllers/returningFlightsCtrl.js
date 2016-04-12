App.controller('returningFlightsCtrl', function ($scope , FlightsSrv,$location) {

	var temp =[];
    FlightsSrv.getReturningFlights().success(function(RetFlights) {
         $scope.RFlights = RetFlights;
     

	    if(FlightsSrv.getSearchOut() && FlightsSrv.getIfRoundTrip()){
	    	  FlightsSrv.getOutgoingFlights().success(function(OutFlights) {
	         
	    	  var destination = FlightsSrv.getSelectedDestinationAirport();
	  		  var origin = FlightsSrv.getSelectedOriginAirport();
	  		  OutFlights.forEach(function(flight){

	  			 if(flight.To==origin && flight.From == destination ){
	    			 temp.push(flight);
	  			 }
	     	});
	  		  $scope.RFlights=temp;
	    });
	   }
   });

    $scope.setFlight = function(value){
    	if(FlightsSrv.getIfRoundTrip()){
    		FlightsSrv.setRetFlight(value);
    		$location.url('/bookingboth');
    	}
      else{
	      FlightsSrv.setOutFlight(value);
	      $location.url('/booking');
	    }
   };
    
});