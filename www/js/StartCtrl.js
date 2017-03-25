angular.module('Bosk')
    .controller('StartCtrl', function ($scope, $ionicPlatform,$rootScope) {
        $scope.visina = "49px"; 
        window.localStorage.setItem("menuLocation", false); 
        var lokalno = window.localStorage.getItem("menuLocation"); 
       $rootScope=true; 
        $scope.naslov = "Change";
        $scope.showDiv = true;
        var geocoder="";
        $scope.$lokacija = "";
        if (!window.localStorage.getItem("lokacija")) {
            $scope.$lokacija = "Zagreb";
        } else {
            $scope.lokacija = window.localStorage.getItem("lokacija");
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
            geocoder = "";
            geocoder = new google.maps.Geocoder();
            console.log(geocoder); 
            var handlerSuccess = function (position) { 
                var lat = position.coords.latitude,
                    long = position.coords.longitude,
                    currentLocation = new google.maps.LatLng(lat, long);
                latvalue = position.coords.latitude;
                lngvalue = position.coords.longitude;
                timestamp = position.timestamp;
                var latlng = new google.maps.LatLng(latvalue, lngvalue);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {

                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log(results)
                        if (results[1]) {

                            //formatted address  
                            var res =  results[1].formatted_address.split(",");
                            alert("Vaša lokacija: "+ results[0].formatted_address);
                            window.localStorage.setItem("lokacija", res[0]);
                            $scope.lokacija = results[1].formatted_address;
                            $scope.lokacija = window.localStorage.getItem("lokacija"); 
                            $scope.$evalAsync();

                            //find country name
                            for (var i = 0; i < results[0].address_components.length; i++) {
                                for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                                    //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                                    if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                                        //this is the object you are looking for
                                        city = results[0].address_components[i];
                                        break;
                                    }
                                }
                            }

                        } else {
                            alert("No results found");
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
                });
                console.log('new position:' + timestamp);
            };

            var handlerError = function (error) {
                alert("greska");
                console.log('Error w/ watchPosition: ' + JSON.stringify(error));
            };

            var watchGeoId = navigator.geolocation.watchPosition(handlerSuccess, handlerError, {
                frequency: 3000,
                enableHighAccurancy: true

            });


        }
        $scope.changeStyle = function () {
            $scope.myStyle = {
                'height': $scope.visina

            }
        }
    })