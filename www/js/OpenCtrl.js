angular.module('Bosk')
.controller('OpenCtrl', function($scope){
    console.log('jessam li se loadao?');
    $scope.title = 'nesto';

    $scope.funkcija = function(){
        alert('nesto');
    }
})