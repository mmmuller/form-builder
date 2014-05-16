(function(module) {

    module.factory('orderService', function() {
        var move = function(oldIndex, newIndex, components) {
            if (newIndex >= components.length) {
                var k = newIndex - components.length;
                while ((k--) + 1) {
                    components.push(undefined);
                }
            }
            components.splice(newIndex, 0, components.splice(oldIndex, 1)[0]);
        };

        return {
            remove: function(component, components) {
                components.splice(components.indexOf(component), 1);
            },
            isFirst: function(component, components) {
                return components.indexOf(component) === 0 ? true : false;

            },
            isLast: function(component, components) {
                return components.indexOf(component) + 1 === components.length ? true : false;
            },
            moveUp: function(component, components) {
                move(components.indexOf(component), (components.indexOf(component) - 1), components);
            },
            moveDown: function(component, components) {
                move(components.indexOf(component), (components.indexOf(component) + 1), components);
            }
        };
    });

})(angular.module('mainServices', []));