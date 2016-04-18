angular
  .module('hshs').factory('eventsService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
    var promise = {};

    output = {
      getAll: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'event/list',
          params: {},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getEvent: function (eventId) {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'event/detail',
          params: { id: eventId },
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getAlbum: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'club/album',
          params: {},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getNews: function () {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'news/latestlist',
          params: {type: 2},
        }).success(function (response) {
          return response.result;
        }).error(function (data, status) {
          console.log(status);
        });
        return promise;
      },
      getEventnews: function (eventId) {
        promise = $http({
          method: 'GET',
          url: baseUrl + 'news/list',
          params: {eventId: eventId},
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
