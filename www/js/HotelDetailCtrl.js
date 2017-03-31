angular.module('Bosk')
.controller('HotelDetailCtrl', function($scope,$stateParams) { 
    $scope.visina = "49px";
        $scope.naslov = "Change";
        $scope.showDiv = true;
        var geocoder="";
        $scope.$lokacija = "";
        if (!window.localStorage.getItem("lokacija")) {
            $scope.$lokacija = "Zagreb";
        } else {
            $scope.lokacija = window.localStorage.getItem("lokacija");
        }
});