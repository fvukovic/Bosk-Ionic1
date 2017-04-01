angular.module('Bosk')
        .controller('StartScreenCtrl', function ($scope, $http, $stateParams) {
                console.log('jessam li se loadao?');
                $scope.showA = false;
                $scope.showB = false;
                $scope.showC = false;
                $scope.showD = false;
                $scope.showE = false;
                if ($stateParams.cityId == "") {

                        if (window.localStorage.getItem("id") != "") { 
                                var request = $http({
                                        method: "POST",
                                        url: 'http://glutenfree.hr/rest/all_cities.php',
                                        data: { city: window.localStorage.getItem("id") },
                                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                                });
                                request.success(function (data) {
                                        for (var i = 0; i < data.length; i++) {
                                                if (data[i]["category"] == 1) {
                                                        $scope.showA = true;
                                                }
                                                if (data[i]["category"] == 2) {
                                                        $scope.showB = true;
                                                }
                                                if (data[i]["category"] == 3) {
                                                        $scope.showC = true;
                                                }
                                                if (data[i]["category"] == 4) {
                                                        $scope.showD = true;
                                                }
                                                if (data[i]["category"] == 5) {
                                                        $scope.showE = true;
                                                }

                                        }
                                });

                        } else
                                var request = $http({
                                        method: "POST",
                                        url: 'http://glutenfree.hr/rest/all_cities.php',
                                        data: { city: 1 },
                                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                                });
                        request.success(function (data) {
                                for (var i = 0; i < data.length; i++) {
                                        if (data[i]["category"] == 1) {
                                                $scope.showA = true;
                                        }
                                        if (data[i]["category"] == 2) {
                                                $scope.showB = true;
                                        }
                                        if (data[i]["category"] == 3) {
                                                $scope.showC = true;
                                        }
                                        if (data[i]["category"] == 4) {
                                                $scope.showD = true;
                                        }
                                        if (data[i]["category"] == 5) {
                                                $scope.showE = true;
                                        }

                                }
                        });
                }
                if ($stateParams.cityId != "-1") {
                        var request = $http({
                                method: "POST",
                                url: 'http://glutenfree.hr/rest/all_cities.php',
                                data: { city: $stateParams.cityId },
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                        });
                        request.success(function (data) {
                                for (var i = 0; i < data.length; i++) {
                                        if (data[i]["category"] == 1) {
                                                $scope.showA = true;
                                        }
                                        if (data[i]["category"] == 2) {
                                                $scope.showB = true;
                                        }
                                        if (data[i]["category"] == 3) {
                                                $scope.showC = true;
                                        }
                                        if (data[i]["category"] == 4) {
                                                $scope.showD = true;
                                        }
                                        if (data[i]["category"] == 5) {
                                                $scope.showE = true;
                                        }

                                }
                        });
                } else {
                        $scope.showA = true;
                        $scope.showB = true;
                        $scope.showC = true;
                        $scope.showD = true;
                        $scope.showE = true;

                }

                $scope.items;



        })

