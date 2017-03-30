angular.module('Bosk')
.controller('InfoCtrl', function($scope, $http){
    console.log('jessam li se loadao?');
    $scope.title = 'nesto';
    $scope.items;
    
console.log('jessam li se ldasdasdasdoadao?');
        $http({
            
            method: "GET",
            url: 'http://glutenfree.hr/rest/info_list_full.php', 
            
        }).then(function successCallback(response) {
            //response.data ti je to
            console.log(response.data); 
            $scope.items=response.data;
            $scope.title = 'nesto';
        }, function errorCallback(response) {
        });
      
})

