angular.module('Bosk')
.controller('DinstanceMapCtrl', function($rootScope,$scope,$stateParams,$location,NgMap, $http,$location,$state,$ionicPlatform,$ionicHistory){ 
    $scope.pocetak=window.localStorage.getItem("pocetak");
$scope.kraj=window.localStorage.getItem("kraj");
$scope.naziv=window.localStorage.getItem("naziv"); 
var vm = this;
    vm.dynMarkers = []
           $ionicPlatform.registerBackButtonAction(function (event) { 
            $ionicHistory.goBack();
  
}, 100);



    NgMap.getMap().then(function (map) {
 
  $rootScope.map = map; 

});
})