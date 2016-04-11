angular
    .module('hshs').factory('backgroundService', ['$rootScope', '$http', '$location', 'toaster', function ($rootScope, $http, $location, toaster) {
        var baseUrl = 'http://222.240.208.174:8083/vma/api/';
        var backgroundService = {};

        output = {
            get: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'alliance/background'
                }).success(function (response) {
                    return response.data;
                }).error(function (data, status) {
                    console.log('error');
                });
                return promise;
            }
        }

        return output;
    }]);