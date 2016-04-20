angular
    .module('hshs').factory('trainService', ['$rootScope', '$http', '$localStorage', 'toaster', 'baseUrl', function ($rootScope, $http, $localStorage, toaster, baseUrl) {
        var promise = {};

        output = {
            getAll: function (status) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'trainning/newsList',
                    params: {type: status},
                }).success(function (response) {
                    return response;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getNews: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'news/list',
                    params: {},
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getTrain: function (trainId) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'trainning/newsDetail',
                    params: {id: trainId},
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getFiles: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'trainning/dataList',
                    params: {pageSize: 10},
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getManagers: function (status) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'trainning/newsList',
                    params: {type: 1},
                }).success(function (response) {
                    return response;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getCoaches: function (status) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'trainning/newsList',
                    params: {type: 2},
                }).success(function (response) {
                    return response;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getVolunteers: function (status) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'trainning/newsList',
                    params: {type: 3},
                }).success(function (response) {
                    return response;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            }
        };

        return output;
    }]);