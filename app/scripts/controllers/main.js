'use strict';

angular.module('bbangApp')
  .controller('sysCtrl', function ($scope) {
    $scope.bbasystems = [
      'Party',
      'Function',
      'Event'
    ];
  });
