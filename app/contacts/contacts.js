'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/view1.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray',function($scope, $firebaseArray) { //allows us to bind data to and form the view from the controller

}]);
//inject firebase as well as in paramaters
