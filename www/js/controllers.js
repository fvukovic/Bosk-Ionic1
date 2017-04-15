angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPopup, $state, $location, $stateParams, $rootScope) {


    $scope.myPopup;
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};
    $scope.openState = function (state) {
      $state.go(state);
    };


    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $rootScope.myproperty = "Varaždin";
    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };
    $scope.exitApp = function () {
      ionic.Platform.exitApp();
    }
    $scope.cancel = function () {
      $scope.myPopup.close();
    }

    $scope.exit = function () {
      $scope.myPopup = $ionicPopup.show({
        templateUrl: 'templates/popup.html',
        title: 'Enter Wi-Fi Password',
        subTitle: 'Please use normal things',
        scope: $scope,
      })

    }
    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('LocCtrl', function ($scope, $location, $http) {
    $scope.title = 'nesto';
    $scope.gradovi;
    $scope.neznam;
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http({
      method: "GET",
      url: 'http://glutenfree.hr/rest/active_cities.php',

    }).then(function successCallback(response) {
      $scope.gradovi = response.data;
      $scope.neznam = response.data;
       console.log("ovo vrati"+ response.data);
    }, function errorCallback(response) {
      alert("No internet connection!");
    });
    $scope.pickCity = function (lokacija,lat,lon,name) {
      window.localStorage.setItem("id", lokacija);
      window.localStorage.setItem("lokacija", name);
      window.localStorage.setItem("lat",lon);
      window.localStorage.setItem("long", lat );
      
      $location.path('/startScreen/');
    }
  })
  .controller('MyController', function (NgMap, $scope, $http,$location,$state) {

    var vm = this;
    vm.dynMarkers = []
    NgMap.getMap().then(function (map) {
        $scope.hotels;
    $scope.category;
    $scope.lat = window.localStorage.getItem("long");
    $scope.long = window.localStorage.getItem("lat");
     $scope.pinClicked = function(event, marker) { 
        console.log('the marker ->', marker,event);
        $state.go('app.detailG',{"hotelId":marker});
      };
    if (window.localStorage.getItem("id") == "-1") {


      var request = $http({
        method: "POST",
        url: 'http://glutenfree.hr/rest/distance.php',
        data: { lon: window.localStorage.getItem("long"), lat: window.localStorage.getItem("lat"), distance: window.localStorage.getItem("distance") },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      request.success(function (data) {
        console.log(data);
        $scope.hotels = data;
        $scope.category = window.localStorage.getItem("category");
      });
      request.error(function (data) {
        console.log(data); 
      });

      $scope.$lokacija = "Zagreb";
    } else {
      $scope.lokacija = window.localStorage.getItem("lokacija");
      var request = $http({
        method: "POST",
        url: 'http://glutenfree.hr/rest/categories.php',
        data: { city: window.localStorage.getItem("id"), category: window.localStorage.getItem("category") },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

      });
      request.success(function (data) {
        $scope.hotels = data;
        $scope.category = window.localStorage.getItem("category");
        console.log("asdasd"+data);
       
      });

    } 
       
    

                 });

  })

  .controller('InfoDetailCtrl', function ($scope, $timeout, $stateParams, $http) {
    $scope.info;
    $scope.infoDescription;
    $scope.image;
    $http({

      method: "GET",
      url: 'http://glutenfree.hr/rest/info_list_full.php',

    }).then(function successCallback(response) {
      //response.data ti je to
      console.log(response.data);
      console.log(response.data[0]["id"]);
      for (var i = 0; i < 2; i++) {
        if ($stateParams.infoId == response.data[i]["id"]) {
          $scope.info = response.data[i]["title"];
          $scope.infoDescription = response.data[i]["description"];
          $scope.image = response.data[i]["image"];
        }
      }
    }, function errorCallback(response) {
    });
  })


