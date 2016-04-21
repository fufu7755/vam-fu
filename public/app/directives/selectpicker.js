angular
    .module('hshs').directive('selectbox', function () {
        return {
            restrict: 'E',
            link: function () {
                return $(window).bind("load", function () {
                    //this will make all your select elements use bootstrap-select
                    return $('select').selectpicker();
                });
            }
        };
    });