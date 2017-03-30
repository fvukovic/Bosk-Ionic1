angular.module('Bosk')
    .controller('OpenCtrl', function ($scope, $timeout, $cordovaSQLite , $location, $ionicSideMenuDelegate, $ionicHistory, $cordovaDeviceOrientation, $http) {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
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
        $http({

            method: "GET",
            url: 'http://glutenfree.hr/rest/info_list_full.php',

        }).then(function successCallback(response) {
            console.log(response.data);
            console.log(response.data[0]["id"]);
            window.localStorage.setItem("info", (response.data));
            $scope.title = 'nesto';
        }, function errorCallback(response) {
        });

        $timeout(funkcija, 4000);
        function funkcija() {
            $location.path('/startScreen');
        }
    })