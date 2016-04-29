angular
    .module('hshs').directive('myModal', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {

                $(element).modal('hide');

            }
        };
    });