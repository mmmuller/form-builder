(function(module) {
    module.config(function($routeProvider) {
        $routeProvider.when('/builder', {
            controller: 'builderCtrl',
            templateUrl: 'src/modules/builder/builder.html'
        });
    });

    module.controller('builderCtrl', function($scope) {
        $scope.list1 = {title: 'AngularJS - Drag Me'};
        $scope.list2 = {};
    });

})(angular.module('builder', []));