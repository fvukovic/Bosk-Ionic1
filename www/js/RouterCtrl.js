angular.module('Bosk')
    .controller('RouterCtrl', function ($scope, $timeout, $ionicPlatform, $cordovaSQLite , $location, $ionicSideMenuDelegate, $ionicHistory, $cordovaDeviceOrientation, $http) {
            $ionicPlatform.registerBackButtonAction(function (event) {
                alert();
     $location.path('/startScreen/');
  
}, 100);

            $location.path('/startScreen/');
        
    })