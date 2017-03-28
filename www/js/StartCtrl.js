angular.module('Bosk')
    .controller('StartCtrl', function ($scope, $ionicPlatform, $rootScope, $location, $cordovaGeolocation, $http) {
        $scope.visina = "49px";
        $scope.naslov = "Change";
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

        $scope.funkcija = function () {
            var element = angular.element(document.querySelector('#lokacija2'));
            var height = element[0].offsetHeight;
            if (height < 100) {
                $scope.visina = "451px";
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

        $scope.changeLocation = function () {
            var posOptions = { timeout: 10000, enableHighAccuracy: false };
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    $scope.lat = position.coords.latitude
                    $scope.long = position.coords.longitude
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
                                $scope.lokacija = array[0]
                                window.localStorage.setItem("lokacija", array[0]);
                                window.localStorage.setItem("hood", "----");
                                $scope.chooseCity();
                                $scope.$evalAsync();
                            } else {
                                alert("No address available");
                            }
                        }
                    })
                    console.log(position);
                })

        }

        $scope.changeStyle = function () {
            $scope.myStyle = {
                'height': $scope.visina

            }
        }
    })