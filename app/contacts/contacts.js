'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/view1.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', [function() {

}]);
