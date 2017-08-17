angular.module('Bosk')
    .controller('EmailCtrl', function ($scope, $http) {
        $scope.email ;
        $scope.message ;
        

        $scope.sendEmail = function () {
            
            $scope.email = document.getElementById("email").value;
            $scope.message = document.getElementById("message").value;
            alert($scope.email+$scope.message);
            var request = $http({

                method: "POST",
                url: 'http://glutenfree.hr/rest/mail_sender.php',
                data: { email: $scope.email, message: $scope.message },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            });
            request.success(function (data) {
                alert("Your email is sent!");

            });
        }
    });