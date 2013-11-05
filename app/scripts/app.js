'use strict';

angular.module('bbangApp', [
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: function() {
          $scope.setActive('home');
        }      
      })
      .when('/systems', {
        templateUrl: 'views/systems.html',
        controller: function() {
          $scope.setActive('systems');
        }
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: function() {
          $scope.setActive('term');
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: function() {
          $scope.setActive('about');
        }
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: function() {
          $scope.setActive('contact');
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
