
App = angular.module('WebApp', ['ui.bootstrap', 'ngRoute']);


App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/partials/LandingPage.html',
          //  controller  : 'mainCtrl'
        })

        // route for the flights page
        .when('/out', {
            templateUrl : '/partials/outgoing.html',
           // controller  : 'flightsCtrl'
        })

        .when('/return',{
            templateUrl:'/partials/returning.html',

        })
        .when('/track',{
            templateUrl:'partials/track.html',

        })
        .when('/booking/flightN',{
            templateUrl:'partials/bookings.html',
        })
        .when('/payment',{
            templateUrl:'partials/payment.html',
        })
        .when('/result',{
            templateUrl:'partials/BookingFlightResults.html',
        })
});
