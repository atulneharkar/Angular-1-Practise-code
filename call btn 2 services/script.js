// Code goes here
var app = angular.module('myApp', []);

//controller
app.controller('FirstCtrl', function($scope, Square, Cube) {
  $scope.calSquare = function() {
    var result = Square.result($scope.number);
    if(result) {
      $scope.result = result;
    } else {
      alert('Please enter number');
    }
  };
  
  $scope.calCube = function() {
    var result = Cube.result($scope.number);
    if(result) {
      $scope.result = result;
    } else {
      alert('Please enter number');
    }
  };
});


//services
app.service('Square', function() {
  this.result = function(number) {
    return (number * number);
  }
});

app.service('Cube', function(Square) {
  this.result = function(number) {
    return (number * Square.result(number));
  };
});