angular.module('Bosk')
.controller('AboutCtrl', function($scope, $http){
    console.log('jessam li se loadao?');
    $scope.title;
    $scope.description;
    $scope.image;

       $http({
            
            method: "GET",
            url: 'http://glutenfree.hr/rest/about_us.php', 
            
        }).then(function successCallback(response) { 
            console.log(response);
             $scope.image=response.data[0]["image"]; 
            $scope.title=response.data[0]["title"];
            $scope.description=(response.data[0]["description"]);
        }, function errorCallback(response) {
        });
})