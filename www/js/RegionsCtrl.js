angular.module('Bosk')
    .controller('RegionsCtrl', function ($scope, $location, $http) {
        $scope.title = 'nesto';
        $scope.gradovi;
        $scope.neznam;
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


        var request = $http({
            method: "GET",
            url: 'http://glutenfree.hr/rest/v2_regions.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
            $scope.regije = data;
            console.log(data);
        });

    });