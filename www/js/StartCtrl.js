angular.module('Bosk')
    .controller('StartCtrl', function($scope) {
        $scope.visina = "49px";
        $scope.naslov ="Change";
        $scope.showDiv=true;
        $scope.lokacija="Zagreb";
        $scope.funkcija = function() {
            var element = angular.element(document.querySelector('#lokacija'));
            var height = element[0].offsetHeight;
            if (height < 100) {
                $scope.visina = "400px";
                 $scope.changeStyle();
                  $scope.naslov ="Close";
                   $scope.showDiv=false;
            } else {
                $scope.visina = "49px";
                console.log('else');
                $scope.naslov ="Change";
                $scope.changeStyle();
                $scope.showDiv=true;
            }
        }
        $scope.changeStyle = function() {
            $scope.myStyle = {
                'height': $scope.visina
                
            }
        }
    })