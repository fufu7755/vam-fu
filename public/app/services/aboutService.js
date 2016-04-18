angular
    .module('hshs').factory('aboutService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
        var promise = {};

        output = {
            getAbout: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'about/info',
                    params: {},
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
