angular.module('Bosk')
.controller('HoodCtrl', function($scope,$stateParams,$location){ 
    $scope.title = 'nesto'; 
    alert($scope.myType);
    $scope.$hood='a'; 
    $scope.chooseHood1 = function($hood){
        window.localStorage.setItem("lokacija","Zagreb"); 
        window.localStorage.setItem("hood",$hood);  
    }
})