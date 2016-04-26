App.controller('outgoingFlightsCtrl', function($scope, FlightsSrv, $location , $window) {
    $scope.OFlights = [];
    if (FlightsSrv.getOtherAir()) {
        FlightsSrv.searchFlights().success(function(MyFlights) {
        var res = FlightsSrv.searchOtherFlights(); 
            if(res != undefined){
                res.success(function(FlightsOther) {
                    $scope.OFlights = (MyFlights.outgoingFlights).concat(FlightsOther.outgoingFlights);
                    if($scope.OFlights.length == 0){
                        $window.alert('We did not find any results matching your search !');
                    }
                });
            }
            else{
                $scope.OFlights = MyFlights.outgoingFlights;
                if($scope.OFlights.length == 0){
                    $window.alert('We did not find any results matching your search !');
                }
            }
        });
    } 
    else {
        FlightsSrv.searchFlights().success(function(MyFlights) {
            $scope.OFlights = MyFlights.outgoingFlights;
            if($scope.OFlights.length == 0){
                $window.alert('We did not find any results matching your search !');
            }
        });
    }

    $scope.setFlight = function(num) {
        FlightsSrv.setOutFlight(num);
        if (FlightsSrv.getIfRoundTrip()) {
            $location.url('/return');
        } else
            $location.url('/booking');
    }

});
