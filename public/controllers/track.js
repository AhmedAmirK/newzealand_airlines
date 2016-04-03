App.controller('trackCtrl',function($scope,FlightsSrv){

$scope.Flight= {};


$scope.showData = function(){

FlightsSrv.getOutgoingFlights().success(function(Flights){
	var found = false;
	Flights.forEach(function(CurrentFlight){
	if(CurrentFlight.FlightNumber==$scope.num)
		$scope.Flight = CurrentFlight;
	});



	});
};

});