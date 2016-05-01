angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

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
          $scope.Booking = Booking;
      $scope.seatNumber = Booking.seat.number;
      $scope.seatClass = Booking.seat.class;
      $scope.seatType = Booking.seat.type;
        }

  });

};

});




