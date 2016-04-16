App.controller('trackCtrl',function($scope,FlightsSrv){

$scope.Flight= {};


$scope.showData = function(){

FlightsSrv.seedDB().success(function(){
	
	FlightsSrv.trackFlight($scope.num).success(function(Flight){
		$scope.Flight=Flight;
	})


	});
};

});