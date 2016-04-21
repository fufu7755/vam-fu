angular
    .module('hshs').directive('selectpicker', function () {
        return {
            restrict: 'A',
            compile: function () {
                return function (scope, element) {
                    $(element).selectpicker();
                };
            }
        };
    });