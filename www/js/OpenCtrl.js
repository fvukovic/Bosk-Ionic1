angular.module('Bosk')
    .controller('OpenCtrl', function ($scope, $timeout, $cordovaSQLite , $location, $ionicSideMenuDelegate, $ionicHistory, $cordovaDeviceOrientation, $http) {
      
        window.localStorage.setItem("id","-2");
        window.localStorage.setItem("lokacija","Whole Croatia");
        window.localStorage.setItem("lat","45.815399");
        window.localStorage.setItem("long","15.966568");
         window.localStorage.setItem("distance","5000");
   /*     var Indata={'lon':'15.3','lat':'45','distance':'1000'};
        $http.post(" http://glutenfree.hr/rest/distance.php", Indata headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }).
        then(function (data) { alert("success") },
             function (data) { alert("error") }); 

*/ 
        

        $timeout(funkcija, 4000);
        function funkcija() {
             screen.orientation.unlock(); 
            $location.path('/startScreen1/'); 
          
        }
    })