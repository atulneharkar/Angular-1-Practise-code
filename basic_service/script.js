// Code goes here
var app = angular.module('myApp', []);
app.controller('FirstCtrl', function($scope, Addition) {
  $scope.add = function() {
    var addResult = Addition.addn($scope.fnum, $scope.snum);
    if(addResult) {
      $scope.result = addResult;
    } else {
      alert('Please enter a number');
    }
  }
  
  $scope.avg = function() {
    var avgResult = Addition.addn($scope.fnum, $scope.snum)/2;
    if(avgResult) {
      $scope.result = avgResult;
    } else {
      alert('Please enter a number');
    }
  }
});

app.service('Addition', function() {  
  var addRes;
  this.addn = function(fnum, snum) {
    if(fnum && snum && fnum.match(/^[0-9]*$/) && snum.match(/^[0-9]*$/)) {
      addRes = parseInt(fnum) + parseInt(snum);
      return addRes;
    } else {
      return false;
    }
  }
});

//app.factory('Addition', function() {  
//  return {
//    addn: function(fnum, snum) {
//    addRes = parseInt(fnum) + parseInt(snum);
//    return addRes;
//  }
//  };
//});
