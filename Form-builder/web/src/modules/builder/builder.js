(function(module) {
    module.config(function($routeProvider) {
        $routeProvider.when('/builder', {
            controller: 'builderCtrl',
            templateUrl: 'src/modules/builder/builder.html'
        });
    });

    module.controller('builderCtrl', function($scope) {
        
    });

})(angular.module('builder', []));