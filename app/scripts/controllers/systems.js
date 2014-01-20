'use strict';

app.controller('RigCtrl', function ($scope) {
    $scope.rigs = [
      {type:'Party', size:'1000W', price:'300'},
      {type:'Function', size:'5kW', price:'500'},
      {type:'Event', size:'15kW', price:'800'}
    ];
});
