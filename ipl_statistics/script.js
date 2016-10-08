// Module
var app = angular.module('myApp', ['ui.router']);


//controller
app.controller('FirstCtrl', ['$scope', 'Perform', 'myService', '$http', '$stateParams', '$state', function($scope, Perform, myService, $http, $stateParams, $state) {
  $scope.fields = [
    { label: 'Name' },
    { label: 'Runs Scored' },
    { label: 'Matches Played' },
    { label: 'Average' },
    { label: 'Strike Rate' },
  ];

  myService.async().then(function(d) {
    $scope.data = d;
    calculation();
  });
  
  $scope.current = $stateParams.playerId;

  $scope.playerId = 0;
  
  if($scope.current) {
    for(var i = 0; i < $scope.data.length; i++) {
      if($scope.current === $scope.data[i].id) {
        $scope.playerName = $scope.data[i].name;
        $scope.runs = $scope.data[i].runs;
        $scope.balls = $scope.data[i].balls;
        $scope.matches = $scope.data[i].matches;
        $scope.playerId = $scope.data[i].id;
      }
    }
  }
  
  function calculation() {
    for(i = 0; i < $scope.data.length; i++) {
      $scope.data[i].avg = Perform.operation($scope.data[i].runs, $scope.data[i].matches); 
      $scope.data[i].strike = Perform.operation($scope.data[i].runs, $scope.data[i].balls)*100; 
    }
  }
  
  $scope.processForm = function() {
      $http.post('process.php', { 'name': $scope.playerName, 'runs': $scope.runs, 'balls': $scope.balls, 
        'matches': $scope.matches, 'playerId': $scope.playerId }).
      success(function(data, status, headers, config) {
        //console.log('success');
      }).
      error(function(data, status, headers, config) {
        //console.log('error');
      });
      
      $state.go('home');
  };
  
  $scope.deletePlayer = function(playerId) {
    $http.post('process.php', { 'delete_id': playerId }).
      success(function(data, status, headers, config) {
        //console.log('success');
      }).
      error(function(data, status, headers, config) {
        //console.log('error');
      });
  }
}])

.controller('FormCtrl', ['$scope', 'myService', function($scope, myService) {
  
}]);


//services
app.service('Perform', function() {
  this.operation = function(param1, param2) {
    return ((param1/param2));
  }
})
.factory('myService', function($http) {
 var myService = {
   async: function() {
     // $http returns a promise, which has a then function, which also returns a promise
     var promise = $http.get('get_data.php').then(function (response) {
       // The then function here is an opportunity to modify the response
       //console.log(response);
       // The return value gets picked up by the then in the controller.
       return response.data;
     });
     // Return the promise to the controller
     return promise;
   }
 };
 return myService;
});


// Router
app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'players-list.html',
            controller: 'FirstCtrl'
        })
        
        // ADD PLAYER PAGE =================================
        .state('add-player', {
            url: '/add-player',
            templateUrl: 'add_player.html',
            controller: 'FirstCtrl'
        })
        
        // EDIT PLAYER PAGE =================================
        .state('edit-player', {
            url: '/edit-player/:playerId',
            templateUrl: 'add_player.html',
            controller: 'FirstCtrl'
        });
        
});