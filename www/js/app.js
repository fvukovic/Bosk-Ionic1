// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
 
angular.module('Bosk', ['ionic','ngCordova', 'starter.controllers','ngMap'])

.run(function($ionicPlatform,$cordovaSQLite) { 
 screen.orientation.lock('portrait'); 
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
    url: '/startScreen/:cityId',
    views: {
      'menuContent': {
        templateUrl: 'templates/page1.html',
        controller:"StartScreenCtrl"  
      }
    }
  })
   .state('app.startScreen1', {
     cache: false,
    url: '/startScreen1/:cityId',
    views: {
      'menuContent': { 
        controller:"RouterCtrl"  
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
  cache: false,
    url: '/hotels',
    views: {
      'menuContent': {
        templateUrl: 'templates/hotels.html',
        controller:  'HotelsCtrl'
      }
    }
  })

  .state('app.stores', {
    cache: false,
    url: '/stores',
    views: {
      'menuContent': {
        templateUrl: 'templates/stores.html',
        controller:  'StoreCtrl'
      }
    }
  })
    .state('app.pharmacie', {
      cache: false,
    url: '/pharmacie',
    views: {
      'menuContent': {
        templateUrl: 'templates/pharmacije.html',
        controller:  'PharmacieCtrl'
      }
    }
  })

  .state('app.restaurants', {
    cache: false,
    url: '/restaurants',
    views: {
      'menuContent': {
        templateUrl: 'templates/restaurants.html',
        controller:  'RestaurantCtrl'
      }
    }
  })
  .state('app.gas', {
    cache: false,
    url: '/gas',
    views: {
      'menuContent': {
        templateUrl: 'templates/gas.html',
        controller:  'GasCtrl'
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
    .state('bapp.bosk', {
    url: '/bosk',
    views: {
      'menuContent': {
        templateUrl: 'templates/BOSKgluten.html',
        controller:  'BoskCtrl'
      }
    }
  })
    .state('app.detail', {
      cache:false,
      url: 'hotels/:hotelId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locationDetail.html',
          controller: 'HotelDetailCtrl',
        }
      }
    })
    .state('app.detailR', {
      cache:false,
      url: 'restaurants/:hotelId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locationDetail.html',
          controller: 'HotelDetailCtrl',
        }
      }
    })
    .state('app.detailS', {
      cache:false,
      url: 'stores/:hotelId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locationDetail.html',
          controller: 'HotelDetailCtrl',
        }
      }
    })
    .state('app.detailP', {
      cache:false,
      url: 'pharmacie/:hotelId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locationDetail.html',
          controller: 'HotelDetailCtrl',
        }
      }
    })
    .state('app.detailG', {
      cache:false,
      url: 'pharmacie/:hotelId',
      views: {
        'menuContent': {
          templateUrl: 'templates/locationDetail.html',
          controller: 'HotelDetailCtrl',
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
        .state('app.distance', {
      cache:false,
      url: '/distance',
      views: {
        'menuContent': {
          templateUrl: 'templates/distanceMap.html',
          controller: 'DinstanceMapCtrl',
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
