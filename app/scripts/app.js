'use strict';

var app = angular.module('bbangApp', [
  'ngResource',
  'ngRoute',
  'ngSanitize'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: function($scope) {
          $scope.setActive('home');
        }      
      })
      .when('/systems', {
        templateUrl: 'views/systems.html',
        controller: "RigCtrl"
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: function($scope) {
          $scope.setActive('term');
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: function($scope) {
          $scope.setActive('about');
        }
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: function($scope) {
          $scope.setActive('contact');
        }
      })
      .otherwise({
        redirectTo: '/'
      })
});
app.directive('helloMaps', function () {
    return function (scope, elem, attrs) {
        var mapOptions,
        latitude = attrs.latitude,
        longitude = attrs.longitude,
        map;

        latitude = latitude && parseFloat(latitude, 10) || 51.338762553296625;
        longitude = longitude && parseFloat(longitude, 10) || -0.120849609375;

        mapOptions = {
          zoom: 7,
          center: new google.maps.LatLng(latitude, longitude)
        };
        map = new google.maps.Map(elem[0], mapOptions);
    };
});  