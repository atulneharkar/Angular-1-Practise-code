// Code goes here
var app = angular.module('myApp', []);

app.controller('ContactController', function($scope, ContactService) {
  $scope.contacts = ContactService.list();

  $scope.saveContact = function() {
    if($scope.newcontact) {
      ContactService.save($scope.newcontact);
      $scope.newcontact = {};
    }
  };

  $scope.edit = function(id) {
    $scope.newcontact = angular.copy(ContactService.get(id));
  };

  $scope.destroy = function(id) {
    ContactService.destroy(id);
  };
});

app.service('ContactService', function() {
  var uniqueId = 1;

 var contacts = [];

  this.save = function(contact) {
    //add new contact
    if(contact.id == null) {
      contact.id = uniqueId++;
      contacts.push(contact);
    }
    //update existing contact
    else {
      for(var i in contacts) {
        if (contacts[i].id == contact.id) {
          contacts[i] = contact;
        }
      }
    }
  }

  this.get = function(id) {
    for(var i in contacts) {
      if (contacts[i].id == id) {
        return contacts[i];
      }
    }
  }

  this.destroy = function(id) {
    for(var i in contacts) {
      if (contacts[i].id == id) {
       contacts.splice(i, 1);
      }
    }
  }

  this.list = function() {
    return contacts;
  }

});
