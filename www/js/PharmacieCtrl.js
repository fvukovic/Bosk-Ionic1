angular.module('Bosk')
    .controller('PharmacieCtrl', function ($scope,$rootScope,$http) { 
        $scope.hotels;
        window.localStorage.setItem("category","4");
        var request=$http({            
            method: "POST",
            url: 'http://glutenfree.hr/rest/categories.php',
            data:{city:window.localStorage.getItem("id"),category:'4'},
            headers : {'Content-Type' : 'application/x-www-form-urlencoded' }
            
        });
        request.success(function (data) { 
        $scope.hotels=data;
        console.log(data);
});
         
    })