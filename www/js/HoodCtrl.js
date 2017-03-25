angular.module('Bosk')
.controller('HoodCtrl', function($scope,$stateParams,$location){ 
    $scope.title = 'nesto';
    console.log('THE HOOB BURAZ'); 
    
    $scope.chooseHood1 = function($hood){
        window.localStorage.setItem("lokacija","Zagreb"); 
        window.localStorage.setItem("hood",$hood);  
    }
})