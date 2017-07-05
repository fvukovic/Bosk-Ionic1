angular.module('Bosk')
    .controller('RouterCtrl', function ($state ,$cordovaGeolocation,$scope, $timeout, $ionicPlatform, $cordovaSQLite , $location, $ionicSideMenuDelegate, $ionicHistory, $cordovaDeviceOrientation, $http) {
            $ionicPlatform.registerBackButtonAction(function (event) { 
     $location.path('/startScreen/');
  
}, 100); 

     var posOptions = { timeout: 3000, enableHighAccuracy: true };
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
                                window.localStorage.setItem("hood", "----");
                                window.localStorage.setItem("id", "-1");
                                console.log(data[1].formatted_address);
                                alert("Your location: " + data[1].formatted_address); 
                                $state.go("app.startScreen", {}, { reload: true });c
                                $scope.chooseCity();
                                $scope.$evalAsync();

                            } else {
                                alert("No address available");
                            }
                        }
                    })
                    console.log(position);

                }).catch(function (response) { 
                     alert("GPS is not available,Location : Whole Croatia!");
                        $state.go("app.startScreen", {}, { reload: true });
                })

           
        
    })