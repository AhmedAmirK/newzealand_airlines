App.controller('outgoingFlightsCtrl', function($scope, FlightsSrv, $location, $window) {
    $scope.OFlights = [];
    temp = [];
    if (FlightsSrv.getOtherAir()) {

        var res = FlightsSrv.searchOtherFlights();
        if (res != undefined) {
            res.success(function(FlightsOther) {
                FlightsOther.forEach(function(Airline){
                    temp  = temp.concat(Airline.outgoingFlights);
                });
                $scope.OFlights = temp;
                if ($scope.OFlights.length == 0) {
                    $window.alert('We did not find any results matching your search !');
                }
            });
        } else {
            FlightsSrv.searchFlights().success(function(MyFlights) {
                $scope.OFlights = MyFlights.outgoingFlights;
                if ($scope.OFlights.length == 0) {
                    $window.alert('We did not find any results matching your search !');
                }
            });
        }

    } else {
        FlightsSrv.searchFlights().success(function(MyFlights) {
            $scope.OFlights = MyFlights.outgoingFlights;
            if ($scope.OFlights.length == 0) {
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
