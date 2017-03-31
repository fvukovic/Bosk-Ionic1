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

  .controller('LocCtrl', function ($scope, $location,$http ) { 
    $scope.title = 'nesto';
    $scope.gradovi;
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $http({
            method: "GET",
            url: 'http://glutenfree.hr/rest/city.php',

        }).then(function successCallback(response) {
            console.log("ovo:" + response.data[0]["id"]);
            $scope.gradovi=response.data;

        }, function errorCallback(response) {
        }); 
    $scope.pickCity = function (lokacija) {
      window.localStorage.setItem("id", lokacija);
       for(var i =0; i<$scope.gradovi.length;i++){
         console.log($scope.gradovi[i]["id"]);
         if($scope.gradovi[i]["id"]==lokacija){ 
            window.localStorage.setItem("lokacija", $scope.gradovi[i]["name"]);
             window.localStorage.setItem("hood", "----");
         }
       } 
      $location.path('/startScreen/'+lokacija);
    }
  })
  .controller('MyController', function (NgMap, $scope,$http) {    
    
            
    if (!window.localStorage.getItem("lokacija")) {
      $scope.$lokacija = "Zagreb";
    } else {
      $scope.lokacija = window.localStorage.getItem("lokacija");
    }
    var vm = this;
    NgMap.getMap().then(function (map) { 
 


    });

  })

  .controller('InfoDetailCtrl', function ($scope, $timeout, $stateParams, $http) {
    $scope.info;
    $scope.infoDescription;
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
        }
      }
    }, function errorCallback(response) {
    });
  })
 

