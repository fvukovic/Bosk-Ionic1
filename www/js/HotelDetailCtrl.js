var c = angular.module('Bosk')
.controller('HotelDetailCtrl', function($scope,$stateParams,$http, $location, $cordovaGeolocation, $http, $ionicHistory, $state,$ionicLoading, $scope, $ionicPlatform, $rootScope, $location, $cordovaGeolocation, $http, $ionicHistory, $state) { 
  $scope.location; 
  $scope.description;
   $scope.pocetak; 
   console.log("ovo je :"+$stateParams.hotelId);
c.directive('browseTo', function ($ionicGesture) {
 return {
  restrict: 'A',
  link: function ($scope, $element, $attrs) {
   var handleTap = function (e) {
    // todo: capture Google Analytics here
    var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
   };
   var tapGesture = $ionicGesture.on('tap', handleTap, $element);
   $scope.$on('$destroy', function () {
    // Clean up - unbind drag gesture handler
    $ionicGesture.off(tapGesture, 'tap', handleTap);
   });
  }
 }
});

  $scope.goOnURL = function(adress){ 
cordova.InAppBrowser.open(adress, '_system');

  }
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
                     
                     console.log($scope.location["adress"]);
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
                     $scope.description=data[i]["description"];
                     console.log("OVOOO" +$scope.description);
                }
            }
        
});
}

$scope.directionClick = function(){
     
             var posOptions = { timeout: 10000, enableHighAccuracy: true };
             window.localStorage.setItem("krajLat",$scope.location["latitude"]) 
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {

                    $scope.lat = position.coords.latitude;
                    window.localStorage.setItem("lat", $scope.lat);
                    $scope.long = position.coords.longitude;
                    window.localStorage.setItem("long", $scope.long);
                   
                    var geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng($scope.lat, $scope.long);
                    var request = {
                        latLng: latlng
                    };

                    geocoder.geocode(request, function (data, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (data[0] != null) {
                                var res = data[1].formatted_address;
                                var array = res.split(',');
                                $scope.lokacija = array[0];
                                window.localStorage.setItem("lokacija", array[0]); 
                                console.log(data[0].formatted_address);  
                                 window.localStorage.setItem("pocetak",data[0].formatted_address)  
                                $scope.chooseCity();
                                $scope.$evalAsync();
                                
                            } else {
                                alert("No address available");
                            }
                        }
                    })

                      var geocoder2 = new google.maps.Geocoder();
                    var latlng2 = new google.maps.LatLng( $scope.location["latitude"], $scope.location["longitude"]);
                    var request2 = {
                        latLng: latlng2
                    };
                             geocoder2.geocode(request2, function (data, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (data[0] != null) {
                                var res = data[1].formatted_address;
                                var array = res.split(',');  
                                console.log("KRAJ: "+data[0].formatted_address);  
                                 window.localStorage.setItem("kraj",data[0].formatted_address) 
                                 $state.go("app.distance", {}, { reload: true }); 
                                
                            } else {
                                alert("No address available");
                            }
                        }
                    })
                    


                    console.log(position);
                      
                }).catch(function(response) {
  alert("Error, check your internet connection or gps device!");
})
                    cordova.plugins.diagnostic.isLocationAvailable(function(available){
    console.log("Location is " + (available ? "available" : "not available"));
    if(available == false){
alert("Please enable GPS service on your device.");
    }else{
          $ionicLoading.show({ template: 'Looking for Your location. Please wait...' , noBackdrop: true, duration: 3000 });
         
}
}, function(error){
   alert("Error, check your internet connection or gps device!");
});
}
 
});