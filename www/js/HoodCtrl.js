angular.module('Bosk')
.controller('HoodCtrl', function($scope,$stateParams){ 
    $scope.title = 'nesto';
    console.log('THE HOOB BURAZ');
    alert($stateParams.cityId);
    $scope.funkcija = function(){
        alert('nesto');
    }
})