angular.module('Bosk')
    .controller('StartCtrl', function($scope) {
        $scope.visina = "99px";
        $scope.funkcija = function() {
            var element = angular.element(document.querySelector('#lokacija'));
            var height = element[0].offsetHeight;
            if (height < 100) {
                $scope.visina = "400px";
                 $scope.changeStyle();
            } else {
                $scope.visina = "99px";
                console.log('else');
                $scope.changeStyle();
            }
        }
        $scope.changeStyle = function() {
            $scope.myStyle = {
                'height': $scope.visina
            }
        }
    })