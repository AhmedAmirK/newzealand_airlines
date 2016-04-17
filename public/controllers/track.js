App.controller('trackCtrl',function($scope,FlightsSrv){

$scope.Flight= {};


$scope.showData = function(){

	
	FlightsSrv.trackFlight($scope.num).success(function(Flight){
		$scope.Flight=Flight;
	});

};

});