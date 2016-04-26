App.controller('trackCtrl',function($scope,FlightsSrv,$window){

$scope.Flight= {};


$scope.showData = function(){

	
	FlightsSrv.trackFlight($scope.num).success(function(results){
		if(results.length == 0){
        	$window.alert('No flight matches this number !');
        }
        else{
        	$scope.Flight = results[0];
        }
	});

};

});