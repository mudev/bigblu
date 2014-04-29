'use strict';

app.controller('ContactCtrl', function($scope){
  $scope.PageClass = 'contact-class';
  $scope.submitForm = function(isValid) {
	// check to make sure the form is completely valid
	if ($scope.form_22683541517354.isValid) {
		alert('Mail Sent. Thanks');
		}
	};
});
