angular
  .module('hshs').factory('homeService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
    var promise = {};

    output = {
      getNewevents: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'event/latestlist',
          params: {pageSize: 6},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getStars: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'vgo/starlist',
          params: {pageSize: 8},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getAlliances: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'alliance/goodlist',
          params: {pageSize: 8},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getImport: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'event/import',
          params: {},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getSponsors: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'ad/latestlist',
          params: {pageSize: 5, metaAdPositionId: 2},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getAd: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'ad/rightBottom',
          params: {},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getSlides: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'ad/latestlist',
          params: {pageSize: 3, metaAdPositionId: 1},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getClubs: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'club/goodlist',
          params: {pageSize: 8},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getAlliannews: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'news/latestlist',
          params: {pageSize: 4, type: 1},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getEventnews: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'news/latestlist',
          params: {pageSize: 3, type: 2},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      subscriber: function (newletter) {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'subscriber/apply',
          params: {name: newletter.name, email: newletter.email},
        }).success(function (response) {
          if (response.statusCode === 0) {
            toaster.pop('success', '订阅成功');
          } else {
            toaster.pop('warning', response.message);
          }
        }).error(function (data, status) {
          toaster.pop('warning', '请稍后再试');
        });
        return promise;
      }
    };

    return output;
  }]);
