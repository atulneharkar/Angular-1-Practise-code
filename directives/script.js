// Code goes here
var app = angular.module('myApp', []);

app.controller('FirstCtrl', ['$scope', function($scope) {
  
}]);

//mouse entering directive
app.directive('entering', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        if(element.next().hasClass('show')) {
          angular.element(document.getElementsByClassName("description")).removeClass('show');
          element.next().removeClass('show');
          angular.element(document.getElementsByClassName("heading")).removeClass('active');
          element.removeClass(attrs.entering);
        } else {
          angular.element(document.getElementsByClassName("description")).removeClass('show');
          element.next().addClass('show');
          angular.element(document.getElementsByClassName("heading")).removeClass('active');
          element.addClass(attrs.entering);
        }
      });
    }
  }
});

