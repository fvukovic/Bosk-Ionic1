var c = angular.module('Bosk')
.controller('HotelDetailCtrl', function($scope,$stateParams,$http) { 
  $scope.location; 
  $scope.description;
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
                     
                     console.log($scope.location);
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
});