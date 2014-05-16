(function(module) {
    module.directive('pages', function(orderService) {
        return {restrict: 'E',
            scope: {
                'pages': '='
            },
            templateUrl: 'src/directives/pages.html',
            link: function($scope, $el, $attr) {
                $scope.orderService = orderService;
            }
        };
    });

})(angular.module('mainDirectives', []));