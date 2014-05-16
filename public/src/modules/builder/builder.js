(function(module) {
    module.config(function($routeProvider) {
        $routeProvider.when('/builder', {
            controller: 'builderCtrl',
            templateUrl: 'src/modules/builder/builder.html'
        });
        $routeProvider.otherwise({redirectTo: 'builder'});
    });

    module.controller('builderCtrl', function($scope) {
        $scope.form = {};
        $scope.form.pages = [
            {'name': 'page1', 'description': 'Page nr 1'},
            {'name': 'page2', 'description': 'Page nr 2'},
            {'name': 'page3', 'description': 'Page nr 3'}
        ];


    });

})(angular.module('builder', []));