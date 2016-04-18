App.controller('outgoingFlightsCtrl', function($scope, FlightsSrv, $location) {
    $scope.OFlights = [];
    if (FlightsSrv.getOtherAir()) {
        FlightsSrv.searchFlights().success(function(MyFlights) {
<<<<<<< HEAD
            var res = FlightsSrv.searchSecureFlights(); 
=======
            var res = FlightsSrv.searchOtherFlights(); 
>>>>>>> 1b87de2bbdcc2b8098ab06faa5212aa56460f750
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
