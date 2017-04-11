angular.module('Bosk')
        .controller('StartScreenCtrl', function ($scope, $http, $stateParams,$ionicLoading) {
                
                console.log('jessam li se loadao?');
                $scope.showA = false;
                $scope.showB = false;
                $scope.showC = false;
                $scope.showD = false;
                $scope.showE = false; 
                $scope.nemaLokacija = false;   
                if (window.localStorage.getItem("id") == "-1") { 
                        var request = $http({
                                method: "POST",
                                url: 'http://glutenfree.hr/rest/distance.php',
                                data: { lon: window.localStorage.getItem("long"), lat: window.localStorage.getItem("lat"),distance: window.localStorage.getItem("distance") },
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        });
                        request.success(function (data) {
                               
                                console.log(data);
                                 for (var i = 0; i < data.length; i++) {
                                                        if (data[i]["category"] == 1) {
                                                                $scope.showA = true;
                                                                $scope.nemaLokacija=true;
                                                        }
                                                        if (data[i]["category"] == 2) {
                                                                $scope.showB = true;
                                                                $scope.nemaLokacija=true;
                                                        }
                                                        if (data[i]["category"] == 3) {
                                                                $scope.showC = true;
                                                                $scope.nemaLokacija=true;
                                                        }
                                                        if (data[i]["category"] == 4) {
                                                                $scope.showD = true;
                                                                $scope.nemaLokacija=true;
                                                        }
                                                        if (data[i]["category"] == 5) {
                                                                $scope.showE = true;
                                                                $scope.nemaLokacija=true;
                                                        }

                                                }
                        });
                }

                                if(  window.localStorage.getItem("id") >0) {  
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
                                                        $scope.nemaLokacija=true;
                                                }
                                                if (data[i]["category"] == 2) {
                                                        $scope.showB = true;
                                                        $scope.nemaLokacija=true;
                                                }
                                                if (data[i]["category"] == 3) {
                                                        $scope.showC = true;
                                                        $scope.nemaLokacija=true;
                                                }
                                                if (data[i]["category"] == 4) {
                                                        $scope.showD = true;
                                                        $scope.nemaLokacija=true;
                                                }
                                                if (data[i]["category"] == 5) {
                                                        $scope.showE = true;
                                                        $scope.nemaLokacija=true;
                                                }

                                        }
                                });
                                         }

                        if(  window.localStorage.getItem("id") == "") {

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

                                } else{
                                       
                                }
                        }
                       
 



                })

