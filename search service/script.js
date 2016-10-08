/*A module is a container for controllers, services, directives, filters etc of
an app*/
var serviceApp = angular.module('serviceApp', []);

serviceApp.controller('SearchServiceCtrl', function($scope) {
  	$scope.searchservice = 'Search Service';
  });

  /*searchArtistController uses pre-defined '$scope' service and self-defined
  'search' service */
  serviceApp.controller('searchArtistController', ['$scope', 'search', function($scope, search) {
  	$scope.searchArtistController = 'searchArtistController';

    /*Dummy data for the app, in a real life example this will ofcourse come from
      a response from the database*/
  	$scope.playlist = [{
  		song: 'Nothing Else Matters',
  		artist: 'metallica'
  	},
  	{
  		song: 'Eye Of The Tiger',
  		artist: 'survivors'
  	},
  	{
  		song: 'My Sacrifice',
  		artist: 'creed'
  	}];


    $scope.searchArtist = function(artistLetter) {
      $scope.foundArtists = [];

      /*
      using the searchFunction() function from the search service passing
      three parameters -
      1. The Array of Objects from which the artists are to be searched.
      2. The input letter by the user
      3. The property name against which the input letter needs to be searched
      */
      $scope.foundArtists = search.searchFunction($scope.playlist, artistLetter, 'artist');
      if($scope.foundArtists.length) {
        $scope.artistFound = true;
      }
    };

  }]);

  serviceApp.controller('searchPlayerController', function($scope, search) {
  	$scope.searchPlayerController = 'searchPlayerController';

  	$scope.playerInfo = [{
  		name: 'cristiano ronaldo',
  		goalsScored: 31
  	},
  	{
  		name: 'lionel messi',
  		goalsScored: 30
  	},
  	{
  		name: 'alexis sanchez',
  		goalsScored: 28
  	}];

    $scope.searchPlayer = function(playerLetter) {
      $scope.foundPlayer = [];
      $scope.foundPlayer = search.searchFunction($scope.playerInfo, playerLetter, 'name');
      if($scope.foundPlayer.length) {
        $scope.nameFound = true;
      }
    };
  });

/* The search service */
serviceApp.factory('search', function () {
  return {
    searchFunction: function (list, letter, name) {
      var foundArtists = [];
        for(var i = 0;  i < list.length; i++) {
          if(list[i][name].startsWith(letter)) {
            foundArtists.push(list[i][name]);
          }
        }
        return foundArtists;
      }
    };
  });

