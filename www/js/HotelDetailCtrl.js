angular.module('Bosk')
.controller('HotelDetailCtrl', function($scope,$stateParams,$http) { 
  $scope.location; 
   console.log("id: " + window.localStorage.getItem("id"));

    if (window.localStorage.getItem("id") == "-1") { 
                        var request = $http({
                                method: "POST",
                                url: 'http://glutenfree.hr/rest/distance.php',
                                data: { lon: window.localStorage.getItem("long"), lat: window.localStorage.getItem("lat"),distance: window.localStorage.getItem("distance") },
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        });
                        request.success(function (data) {
                             for(var i = 0; i<data.length;i++){
                if(data[i]["id"]== $stateParams.hotelId){
                     $scope.location=data[i];
                     
                     console.log($scope.location);
                }
            }
                             
                        });
    }else{
   var request =$http({            
            method: "POST",
            url: 'http://glutenfree.hr/rest/categories.php',
            data:{city:window.localStorage.getItem("id"),category:window.localStorage.getItem("category")},
            headers : {'Content-Type' : 'application/x-www-form-urlencoded' }
            
        }); 
        request.success(function (data) {
            for(var i = 0; i<data.length;i++){
                if(data[i]["id"]== $stateParams.hotelId){
                     $scope.location=data[i];
                     
                     console.log($scope.location);
                }
            }
        
});
}
});