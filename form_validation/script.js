// app.js
// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {

  $scope.passwordMatch = true;

  // function to submit the form after all validation has occurred
  $scope.submitForm = function(isValid) {

    $scope.submitted = true;
  	
    if (isValid && ($scope.repassword == $scope.password)) {
      alert('Valid');
    }

  };

  $scope.checkPasswordMatch = function() {
    if($scope.repassword == $scope.password) {
      $scope.passwordMatch = true;
    } else {
      $scope.passwordMatch = false;
    }
  }

});