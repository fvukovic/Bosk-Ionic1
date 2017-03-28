angular.module('Bosk')
.controller('OpenCtrl', function($scope,  $timeout,$location,$ionicSideMenuDelegate, $ionicHistory,$cordovaDeviceOrientation){
    console.log('jessam li se ldasdasdasdoadao?'); 
    $scope.title = 'nesto';
    
    $ionicHistory.nextViewOptions({
     disableBack: true
  }); 
    $timeout(funkcija, 4000); 
    function funkcija (){   
        $location.path('/startScreen');
    }
})