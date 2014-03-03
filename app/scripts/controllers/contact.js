'use strict';

app.controller('ContactCtrl', function($scope){
  $scope.PageClass = 'contact-class';
  $scope.submitForm = function() {
	// check to make sure the form is completely valid
	if ($scope.form_22683541517354.$valid) {
		alert('our form is amazing');
		}
	};
});
