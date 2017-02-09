'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/view1.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray',function($scope, $firebaseArray) { //allows us to bind data to and form the view from the controller
  var ref = new Firebase('https://contactlist-31b15.firebaseio.com/')//url from firebase.com database after app was created
}]);
//inject firebase as well as in paramaters
