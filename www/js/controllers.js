angular.module('starter.controllers', [])



.controller('trackCtrl',function($scope,FlightsSrv,$window){

    $scope.Flight= {};
    $scope.input = {};

    $scope.showData = function(){
   
      FlightsSrv.trackFlight($scope.input.flightNumber).success(function(results){
        if(results.length == 0){
              $window.alert('No flight matches this number !' + $scope.input.flightNumber);
            }
            else{
              $scope.Flight = results[0];
            }
      });

    };

})

.controller('findBookingCtrl',function($scope,FlightsSrv,$window){

$scope.Booking = {};
$scope.input = {};

$scope.showBooking = function(){

  
  FlightsSrv.findBooking($scope.input.bookingRefNumber).success(function(results){
        
        if(results.length == 0){
          $window.alert('No booking matches this number !');
        }
        else{
          var Booking = results[0];
         // console.log(Booking);
          $scope.Booking = Booking;
          $scope.seatNumber = Booking.seat.number;
          $scope.seatClass = Booking.seat.class;
        }

  });

};

});




