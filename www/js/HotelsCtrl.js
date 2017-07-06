angular.module('Bosk')

    .controller('HotelsCtrl', function ($scope, $rootScope, $http) {
        $scope.hotels; 
        if (window.localStorage.getItem("id") == "-2") {

            var request = $http({
                method: "POST",
                url: 'http://glutenfree.hr/rest/v2_categories.php',
                data: { city: window.localStorage.getItem("id"), category: '1' },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            });
            request.success(function (data) {
                console.log(data);
                $scope.hotels = data;
            });
        }

            // Enter city id of the seleceted location

        $scope.enterCity = function(id){ 
           window.localStorage.setItem("gradId",id);
        }

        window.localStorage.setItem("category", "1");
        if (window.localStorage.getItem("id") != "-1") {
            var request = $http({
                method: "POST",
                url: 'http://glutenfree.hr/rest/categories.php',
                data: { city: window.localStorage.getItem("id"), category: '1' },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            });
            request.success(function (data) {
                console.log(data);
                $scope.hotels = data;
            });
        } else {
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