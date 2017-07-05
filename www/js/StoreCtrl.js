angular.module('Bosk')
    .controller('StoreCtrl', function ($scope,$rootScope,$http) { 
        $scope.hotels;
        window.localStorage.setItem("category","3");

             if (window.localStorage.getItem("id") == "-2") {

            var request = $http({
                method: "POST",
                url: 'http://glutenfree.hr/rest/v2_categories.php',
                data: { city: window.localStorage.getItem("id"), category: '3' },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            });
            request.success(function (data) {
                console.log(data);
                $scope.hotels = data;
            });
        }


     if(window.localStorage.getItem("id")!="-1"){
        var request =$http({            
            method: "POST",
            url: 'http://glutenfree.hr/rest/categories.php',
            data:{city:window.localStorage.getItem("id"),category:'3'},
            headers : {'Content-Type' : 'application/x-www-form-urlencoded' }
            
        });
        request.success(function (data) { 
        $scope.hotels=data;
        console.log(data);
});
}else{
  var request = $http({
        method: "POST",
        url: 'http://glutenfree.hr/rest/distance.php',
        data: { lon: window.localStorage.getItem("long"), lat: window.localStorage.getItem("lat"), distance: window.localStorage.getItem("distance") },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      request.success(function (data) {
        console.log(data);
        $scope.hotels = data;
      });
}
         
    })