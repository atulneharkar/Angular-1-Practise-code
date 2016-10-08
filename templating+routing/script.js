// Code goes here
var app = angular.module('myApp', ['ngRoute']);

// configure our routes
app.config(function ($routeProvider) {
  $routeProvider

          // route for the home page
          .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
          })

          // route for the about page
          .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutController'
          })

          // route for the contact page
          .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactController'
          });
});


app.controller('homeController', function ($scope) {
  $scope.data = [
    {
      empid: '1',
      name: 'Atul',
      designation: 'developer',
      address: 'Kalyan',
      mb: '8767067878'
    },
    {
      empid: '2',
      name: 'Bharat',
      designation: 'developer',
      address: 'Thane',
      mb: '8767067878'
    },
    {
      empid: '3',
      name: 'Apekshit',
      designation: 'developer',
      address: 'USA',
      mb: '86787067878'
    },
    {
      empid: '4',
      name: 'Shailesh',
      designation: 'developer',
      address: 'Kalyan',
      mb: '678067878'
    },
    {
      empid: '5',
      name: 'Parag',
      designation: 'qa',
      address: 'Sanpada',
      mb: '6786878'
    },
    {
      empid: '6',
      name: 'Akash',
      designation: 'developer',
      address: 'Kalyan',
      mb: '678677878'
    },
    {
      empid: '7',
      name: 'Sushant',
      designation: 'qa',
      address: 'Kalyan',
      mb: '7687878'
    },
    {
      empid: '8',
      name: 'Sushil',
      designation: 'pm',
      address: 'Vashi',
      mb: '5465878'
    },
    {
      empid: '9',
      name: 'Parvez',
      designation: 'developer',
      address: 'Bandra',
      mb: '547547878'
    },
    {
      empid: '10',
      name: 'Manish',
      designation: 'developer',
      address: 'Bhandup',
      mb: '2353257878'
    },
    {
      empid: '11',
      name: 'Shriney',
      designation: 'pm',
      address: 'Kalwa',
      mb: '8764557878'
    },
  ];
});

app.controller('aboutController', function ($scope) {
  $scope.message = "This is About Page.";
});

app.controller('contactController', function ($scope) {
  $scope.message = "This is Contact Page.";
});
