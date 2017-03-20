angular.module('Bosk')
.controller('EmailCtrl', function($scope) {
    document.addEventListener("deviceready", function () {
       $scope.sendEmail= function() {console.log("asdasds");
      alert();
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
                    alert();
            }, 
            "Feedback for your App", // Subject
            "",                      // Body
            ["fvukovic@foi.hr"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }
}, false);

});