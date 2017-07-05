angular.module('Bosk')
    .controller('StartCtrl', function ($ionicLoading, $scope, $ionicPlatform, $rootScope, $location, $cordovaGeolocation, $http, $ionicHistory, $state) {
        $scope.visina = "49px";
        $scope.naslov = "Change";
        $scope.grad;
        $scope.working = true;
        if (window.localStorage.getItem("lokacija") == "" || window.localStorage.getItem("lokacija") == null) {
            $scope.grad = 1;
        } else {
            $scope.grad = window.localStorage.getItem("lokacija");
        }

          $ionicLoading.show({ template: 'Looking for Your location. Please wait .. ', noBackdrop: true, duration: 3000 });
          
        $scope.showDiv = true;

        var geocoder = "";
        $scope.$lokacija = $rootScope.myproperty;
        if (!window.localStorage.getItem("lokacija")) {
            $scope.$lokacija = "Zagreb";
        } else {
            $scope.lokacija = window.localStorage.getItem("lokacija");
        }
        $scope.chooseCity = function () {
            $scope.lokacija = window.localStorage.getItem("lokacija");
            return ($scope.lokacija);
        }
        $scope.chooseHood = function () {
            return (window.localStorage.getItem("hood"));
        }
        $scope.setDistance = function (distance) {

            window.localStorage.setItem("distance", distance);
            $scope.changeLocation();

        }

        $scope.funkcija = function () {
            var element = angular.element(document.querySelector('#lokacija'));
            var height = element[0].offsetHeight;
            if (height < 100) {
                $scope.visina = "420px";
                $scope.changeStyle();
                $scope.naslov = "Close";
                $scope.showDiv = false;
            } else {
                $scope.visina = "55px";
                console.log('else');
                $scope.naslov = "Change";
                $scope.changeStyle();
                $scope.showDiv = true;
            }
        }

        $scope.goBack = function () {
            $ionicHistory.goBack();

        }

        $scope.changeLocation = function () {
            if (window.localStorage.getItem("distance") < 50) {
                window.localStorage.setItem("distance", "5000");
            }

            var posOptions = { timeout: 13000, enableHighAccuracy: true };
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
                                $location.path('/startScreen/-1');
                                $state.go($state.current, {}, { reload: true });
                                $scope.chooseCity();
                                $scope.$evalAsync();

                            } else {
                                alert("No address available");
                            }
                        }
                    })
                    console.log(position);

                }).catch(function (response) {
                       if( window.localStorage.getItem("id")==-2){
                     alert("GPS is not available,Location : Whole Croatia!");
                }else{
                alert("Error, check your internet connection or gps device!");
                }
                })
            cordova.plugins.diagnostic.isLocationAvailable(function (available) {
                console.log("Location is " + (available ? "available" : "not available"));
                if (available == false) {
                    alert("Please enable GPS service on your device.");
                } else {
                    $ionicLoading.show({ template: 'Looking for Your location. Please wait .. <br> Distance: ' + window.localStorage.getItem("distance"), noBackdrop: true, duration: 3000 });
                $location.path('/startScreen/-1');

                }
            }, function (error) { 
                alert("Error, check your internet connection or gps device!"); 
            });

        }
       
             
            
        $scope.changeStyle = function () {
            $scope.myStyle = {
                'height': $scope.visina

            }
        }

    })