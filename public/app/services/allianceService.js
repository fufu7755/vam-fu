angular
  .module('hshs').factory('allianceService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
    var promise = {};

    output = {
      getAll: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'alliance/list',
          params: {},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getName: function (alliances, allianceId) {
        var alliance = _.find(alliances, {"id": allianceId});
        return alliance.name;
      },
      getAlliancenews: function (newsId) {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'news/detail',
          params: {id: newsId},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getAllclubs: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'club/list',
          params: {}
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getBack: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'ad/background',
          params: {'type': 'alliance'}
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getDetail: function (allianceId) {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'alliance/detail',
          params: {id: allianceId},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },

    };

    return output;
  }]);
