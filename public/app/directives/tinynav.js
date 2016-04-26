angular
    .module('hshs').directive('tinynav', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).tinyNav({
                    active: 'selected'
                });
            }
        };
    });