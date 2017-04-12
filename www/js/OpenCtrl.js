angular.module('Bosk')
    .controller('OpenCtrl', function ($scope, $timeout, $cordovaSQLite , $location, $ionicSideMenuDelegate, $ionicHistory, $cordovaDeviceOrientation, $http) {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        window.localStorage.setItem("id","1");
        window.localStorage.setItem("lokacija","Zagreb");
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
var Indata = {'lon': '16.328681', 'lat': '46.298267','distance':'5000' };


 



        document.addEventListener('deviceready', function () {

            var db = null;
 
  db = window.sqlitePlugin.openDatabase({name: 'demo.db', location: 'default'}); 
            db.sqlBatch([
    "CREATE TABLE IF NOT EXISTS cities (  id int(4) NOT NULL primary key,  title varchar(32)  DEFAULT NULL,  county int(4) DEFAULT NULL)",[ 'INSERT INTO cities VALUES (?,?,?)', [101,'Alice', 101] ],
    [ 'INSERT INTO cities VALUES (?,?,?)', [11,'Zagreb', 202] ],
    [ 'INSERT INTO cities VALUES (?,?,?)', [211,'Dugo selo', 202] ],
  ], function() {
    console.log('Populated database OK');
  }, function(error) {
    console.log('SQL batch ERROR: ' + error.message);
  });

  db.executeSql('SELECT *  FROM cities', [], function(rs) {
    console.log('Record count (expected to be 2): ' + rs.rows.item(0).title);
  }, function(error) {
    console.log('SELECT SQL statement ERROR: ' + error.message);
  });

        });
        console.log('jessam li se ldasdasdasdoadao?');
      

        $timeout(funkcija, 4000);
        function funkcija() {
            $location.path('/startScreen/');
        }
    })