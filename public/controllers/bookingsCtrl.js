App.controller('bookingsCtrl', function($scope, $location, FlightsSrv) {

    $scope.OutFlight = FlightsSrv.getOutFlight();
    $scope.RetFlight = FlightsSrv.getRetFlight();
    $scope.selectedSeat = "Window";
    FlightsSrv.setSeat($scope.selectedSeat);


    $scope.selectSeat = function() {
        FlightsSrv.setSeat($scope.selectedSeat);

    }


    $scope.bookFlights = function() {
        FlightsSrv.setOutFlightID($scope.OutFlight._id);
        if ($scope.RetFlight != undefined)
            FlightsSrv.setRetFlightID($scope.RetFlight._id);
        if (FlightsSrv.getIfRoundTrip())
            $location.url('/paymentTwoWay');
        else $location.url('/payment');
    }

});
