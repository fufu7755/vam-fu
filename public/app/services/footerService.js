angular
    .module('hshs').factory('footerService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
        var promise = {};

        output = {
            getExteriorLink: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'exteriorLink/list',
                    params: {pageSize: 12},
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            }
        };

        return output;
    }]);
