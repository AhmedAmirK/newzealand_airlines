// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var App = angular.module('starter', ['ionic', 'starter.controllers','angular-stripe'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,stripeProvider) {
  
  stripeProvider.setPublishableKey('pk_test_iODlRTJ5yPofXCcpJZH8cXSD');

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller:'mainCtrl'
      }
    }
  })
    .state('app.outgoing', {
      url: '/out',
      views: {
        'menuContent': {
          templateUrl: 'templates/outgoing.html',
          controller:'outgoingFlightsCtrl'
        }
      }
    })
        .state('app.return', {
      url: '/return',
      views: {
        'menuContent': {
          templateUrl: 'templates/returning.html',
          controller:'returningFlightsCtrl'
        }
      }
    })

  .state('app.track', {
      url: '/track',
      views: {
        'menuContent': {
          templateUrl: 'templates/track.html',
          controller:'trackCtrl'
        }
      }
    })

   .state('app.mybookings', {
      url: '/mybookings',
      views: {
        'menuContent': {
          templateUrl: 'templates/mybookings.html',
          controller: 'findBookingCtrl'
        }
      }
    })

  .state('app.bookings', {
      url: '/bookings',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookings.html',
          controller: 'bookingsCtrl'
        }
      }
    })

    .state('app.twowaybookings', {
      url: '/twowaybookings',
      views: {
        'menuContent': {
          templateUrl: 'templates/twowaybookings.html',
          controller: 'bookingsCtrl'
        }
      }
    })

    .state('app.payment', {
      url: '/payment',
      views: {
        'menuContent': {
          templateUrl: 'templates/payment.html',
          controller:'paymentCtrl'
        }
      }
    })

    .state('app.twowaypayment', {
      url: '/twowaypayment',
      views: {
        'menuContent': {
          templateUrl: 'templates/twowaypayment.html',
          controller: 'paymentCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
  
});
