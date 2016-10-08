// Code goes here
var app = angular.module('myApp', []);
app.controller('FirstCtrl', function($scope) {
  $scope.fields = [
    {
      label: 'fname',
      type: 'text'
    },
    {
      label: 'lname',
      type: 'text'
    },
    {
      label: 'email',
      type: 'text'
    }
  ]
});
