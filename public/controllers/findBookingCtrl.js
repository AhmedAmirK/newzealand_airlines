App.controller('findBookingCtrl',function($scope,FlightsSrv){

$scope.Booking = {};


$scope.showBooking = function(){

	
	FlightsSrv.findBooking($scope.brnumber).success(function(Booking){
		console.log(Booking);
		$scope.Booking = Booking;
		$scope.seatNumber = Booking.seat.number;
		$scope.seatClass = Booking.seat.class;
		$scope.seatType = Booking.seat.type;
	});

};

});