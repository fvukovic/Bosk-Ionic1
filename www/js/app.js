// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
 
angular.module('Bosk', ['ionic','ngCordova', 'starter.controllers','ngMap'])

.run(function($ionicPlatform,$cordovaSQLite) {
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
    var db = null;

document.addEventListener('deviceready', function() { 
  

});
     });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      
    .state('app', {
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
   .state('bapp', {
    abstract: true,
    templateUrl: 'templates/menu2.html',
    controller: 'AppCtrl'
  })
   .state('prazan', {
    abstract: true,
    templateUrl: 'templates/menuPrazan.html',
    controller: 'AppCtrl'
  }) 
   .state('prazan.start', { 
     cache: false,
    url: '/start',
    views: {
      'menuContent': {
        templateUrl: 'templates/open.html', 
         controller:'OpenCtrl'
      }
    }
  })
  .state('app.startScreen', {
     cache: false,
    url: '/startScreen',
    views: {
      'menuContent': {
        templateUrl: 'templates/page1.html',  
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller:  'AboutCtrl'
      }
    }
  })
.state('app.hotels', {
    url: '/hotels',
    views: {
      'menuContent': {
        templateUrl: 'templates/hotels.html',
        controller:  'HotelsCtrl'
      }
    }
  })

  .state('app.stores', {
    url: '/stores',
    views: {
      'menuContent': {
        templateUrl: 'templates/stores.html',
        controller:  'AboutCtrl'
      }
    }
  })

  .state('app.restaurants', {
    url: '/restaurants',
    views: {
      'menuContent': {
        templateUrl: 'templates/restaurants.html',
        controller:  'AboutCtrl'
      }
    }
  })


  .state('bapp.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutus.html',
        controller:  'AboutCtrl'
      }
    }
  })
    .state('app.detail', {
      cache:false,
      url: 'hotels/:hotelId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locationDetail.html',
          controller: 'HoodCtrl',
        }
      }
    })
    .state('app.hood', {
      cache:false,
      url: 'lokacije/:cityId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locationsHood.html',
          controller: 'HoodCtrl',
        }
      }
    })
    .state('bapp.page2', {
      cache:false,
      url: '/page2',
      views: {
        'menuContent': {
          templateUrl: 'templates/page2.html',
          controller:"EmailCtrl"
        }
      }
    })
    .state('app.map', {
      cache:false,
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MyController',
        }
      }
    })
    .state('bapp.info', {
      url: '/info',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html', 
          controller: "InfoCtrl",
        }
      }
    })
      .state('app.location', {
      url: '/lokacije',
      views: {
        'menuContent': {
          templateUrl: 'templates/locations.html', 
          controller: 'LocCtrl'
        }
      }
    })
    .state('bapp.infoD', {
    url: '/info/:infoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/infoDetail.html',
        controller: 'InfoDetailCtrl'
      }
    }
  }) 


  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');
});
