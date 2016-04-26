App.controller('findBookingCtrl',function($scope,FlightsSrv,$window){

$scope.Booking = {};


$scope.showBooking = function(){

	
	FlightsSrv.findBooking($scope.brnumber).success(function(results){
        
        if(results.length == 0){
        	$window.alert('No booking matches this number !');
        }
        else{
        	var Booking = results[0];
        	$scope.Booking = Booking;
			$scope.seatNumber = Booking.seat.number;
			$scope.seatClass = Booking.seat.class;
			$scope.seatType = Booking.seat.type;
        }

	});

};

});