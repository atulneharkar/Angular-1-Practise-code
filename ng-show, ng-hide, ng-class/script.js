// Code goes here
var app = angular.module('myApp', []);
app.controller('FirstCtrl', function($scope, checkNumber) {

  var result;

  $scope.check = function(number) {
    $scope.even = false;
    $scope.odd = false;
    result = checkNumber.type(number);
    if(result == 'even') {
      $scope.even = true;
    } else if(result == 'odd') {
      $scope.odd = true;
    }
  }
  
});

app.controller('SecondCtrl', function($scope) {

});

app.service('checkNumber', function() {
  this.type = function(num) {
    if(num && num.match(/^[1-9]*$/)) {
      if(num % 2 == 0) {
        return 'even';
      } else {
        return 'odd';
      }
    } else {
      alert('Please enter number.');
    }
  }
});
