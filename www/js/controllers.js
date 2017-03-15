angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$state,$location) {

 
$scope.myPopup;
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {}; 
  $scope.openState = function(state) { 
  $state.go(state); 
};

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
    $scope.exitApp=function()
    {  
      ionic.Platform.exitApp();
    }
    $scope.cancel=function()
    { 
       $scope.myPopup.close();
        }

    $scope.exit = function(){
    $scope.myPopup = $ionicPopup.show({
     templateUrl: 'templates/popup.html',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope, 
      })

  }
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

.controller('LocCtrl', function($scope,$location){
    console.log('jessam li se loadao?');
    $scope.title = 'nesto';

    $scope.odabirLokacije = function(lokacija){ 
         window.localStorage.setItem( "lokacija", lokacija );
        $location.path('/startScreen');
    }
})
.controller('MyController', function(NgMap,$scope) {
      $scope.visina = "49px";
        $scope.naslov = "Change";
        $scope.showDiv = true;
        var geocoder="";
        $scope.$lokacija = "";
        if (!window.localStorage.getItem("lokacija")) {
            $scope.$lokacija = "Zagreb";
        } else {
            $scope.lokacija = window.localStorage.getItem("lokacija");
        }


        $scope.funkcija = function () {             
            var element = angular.element(document.querySelector('#lokacija1'));
            var height = element[0].offsetHeight;
            if (height < 100) {
                $scope.visina = "458px";
                $scope.changeStyle();
                $scope.naslov = "Close";
                $scope.showDiv = false;
            } else {
                $scope.visina = "55px";
                console.log('else');
                $scope.naslov = "Change";
                $scope.changeStyle();
                $scope.showDiv = true;
            }
        }

        $scope.changeLocation = function () { 
            geocoder = "";
            geocoder = new google.maps.Geocoder();
            console.log(geocoder); 
            var handlerSuccess = function (position) { 
                var lat = position.coords.latitude,
                    long = position.coords.longitude,
                    currentLocation = new google.maps.LatLng(lat, long);
                latvalue = position.coords.latitude;
                lngvalue = position.coords.longitude;
                timestamp = position.timestamp;
                var latlng = new google.maps.LatLng(latvalue, lngvalue);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {

                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log(results)
                        if (results[1]) {

                            //formatted address  
                            var res =  results[1].formatted_address.split(",");
                            alert("Vaša lokacija: "+ results[0].formatted_address);
                            window.localStorage.setItem("lokacija", res[0]);
                            $scope.lokacija = results[1].formatted_address;
                            $scope.lokacija = window.localStorage.getItem("lokacija"); 
                            $scope.$evalAsync();

                            //find country name
                            for (var i = 0; i < results[0].address_components.length; i++) {
                                for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                                    //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                                    if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                                        //this is the object you are looking for
                                        city = results[0].address_components[i];
                                        break;
                                    }
                                }
                            }

                        } else {
                            alert("No results found");
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
                });
                console.log('new position:' + timestamp);
            };

            var handlerError = function (error) {
                alert("greska");
                console.log('Error w/ watchPosition: ' + JSON.stringify(error));
            };

            var watchGeoId = navigator.geolocation.watchPosition(handlerSuccess, handlerError, {
                frequency: 3000,
                enableHighAccurancy: true

            });


        }
        $scope.changeStyle = function () {
            $scope.myStyle = {
                'height': $scope.visina

            }
        }
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());   
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
    
  });
  
})

.controller('OpenCtrl', function($scope,  $timeout,$location,$ionicSideMenuDelegate, $ionicHistory){
    console.log('jessam li se loadao?'); 
    $scope.title = 'nesto';
    $ionicHistory.nextViewOptions({
     disableBack: true
  });
    $scope.menuVisibility=true;
    $timeout(funkcija, 4000); 
    function funkcija (){  
       $scope.menuVisibility=false; 
        $location.path('/startScreen');
    }
})
.controller('GeoCtrl', function($cordovaGeolocation) {
console.log("lodam se")
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });


  var watchOptions = {
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      console.log(lat);
  });


  watch.clearWatch();
  // OR
  $cordovaGeolocation.clearWatch(watch)
    .then(function(result) {
      // success
      }, function (error) {
      // error
    });
});

 