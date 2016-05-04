
var App = angular.module('WebApp', ['ui.bootstrap', 'ngRoute','angular-stripe']);


App.config(function($routeProvider) {

    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/partials/main.html',
            controller  : 'mainCtrl'
        })

        // route for the flights page
        .when('/out', {
            templateUrl : '/partials/outgoing.html',
            controller  : 'outgoingFlightsCtrl'
        })

        .when('/return',{
            templateUrl:'/partials/returning.html',
            controller : 'returningFlightsCtrl'

        })
        .when('/track',{
            templateUrl:'partials/track.html',
            controller: 'trackCtrl'
        })
        .when('/findBooking',{
            templateUrl:'partials/findBooking.html',
            controller: 'findBookingCtrl'
        })
        .when('/booking',{
            templateUrl:'partials/bookings.html',
            controller:'bookingsCtrl'
        })
        .when('/bookingboth',{
            templateUrl:'partials/bookoutandret.html',
            controller:'bookingsCtrl'
        })
        .when('/payment',{
            templateUrl:'partials/payment.html' ,
            controller:'paymentCtrl'
        })
        .when('/paymentTwoWay',{
            templateUrl:'partials/paymentTwoWay.html' ,
            controller:'paymentCtrl'
        });
});


App.config(function(stripeProvider){
    stripeProvider.setPublishableKey('pk_test_iODlRTJ5yPofXCcpJZH8cXSD');
});
