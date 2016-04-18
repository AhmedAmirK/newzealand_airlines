App.controller('outgoingFlightsCtrl', function($scope, FlightsSrv, $location) {
    $scope.OFlights = [];
    if (FlightsSrv.getOtherAir()) {
        FlightsSrv.searchFlights().success(function(MyFlights) {
            var res = FlightsSrv.searchOtherFlights(); 
            if(res != undefined){
                res.success(function(FlightsOther) {
                    $scope.OFlights = (MyFlights.outgoingFlights).concat(FlightsOther.outgoingFlights);
                });
            }
            else{
                $scope.OFlights = MyFlights.outgoingFlights;
            }
        });
    } 
    else {
        FlightsSrv.searchFlights().success(function(MyFlights) {
            $scope.OFlights = MyFlights.outgoingFlights;
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
