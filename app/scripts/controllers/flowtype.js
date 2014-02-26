
app.directive('flowtxt', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).flowtype(scope.$eval("{" + attrs.flowtxt + "}"));
        }
    };
});
