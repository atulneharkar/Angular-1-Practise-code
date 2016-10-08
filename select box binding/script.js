// Code goes here
var app = angular.module('myApp', []);
app.controller('FirstCtrl', function($scope) {
  $scope.courses = [
    {
      name: 'Computer Science',
      fee: '50,000',
      city: ['Mumbai', 'Thane', 'Pune']
    },
    {
      name: 'Mechanical engineering',
      fee: '60,000',
      city: ['Dadar', 'Borivali', 'Virar']
    },
    {
      name: 'Information Technology',
      fee: '45,000',
      city: ['Churchgate', 'Bandra', 'Andheri']
    },
    {
      name: 'Civil engineering',
      fee: '70,000',
      city: ['Dombivali', 'Badlapur', 'Karjat']
    },
    {
      name: 'Electrical engineering',
      fee: '55,000',
      city: ['Ghansoli', 'Airoli', 'Vashi']
    }
  ];
});
