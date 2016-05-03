App.controller('bookingsCtrl', function($scope, $state , FlightsSrv){

    $scope.OutFlight= FlightsSrv.getOutFlight();
    $scope.RetFlight=FlightsSrv.getRetFlight();
    $scope.selectedSeat = "Window";
    FlightsSrv.setSeat($scope.selectedSeat);

    $scope.input={}
   $scope.selectSeat= function(){
   	FlightsSrv.setSeat($scope.input.selectedSeat);
   	
   };
 

   $scope.bookFlights= function(){

    FlightsSrv.setOutFlightID($scope.OutFlight.flightId);

    if ($scope.RetFlight != undefined)
        FlightsSrv.setRetFlightID($scope.RetFlight.flightId);

    if(FlightsSrv.getIfRoundTrip())
      $state.go('app.twowaypayment');
    else $state.go('app.payment');
   };

});