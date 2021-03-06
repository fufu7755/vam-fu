angular
  .module('hshs').factory('clubService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
      var promise = {};

      output = {
          getAll: function (allianceId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'club/list',
                  params: { allianceId: allianceId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },

          getDetail: function (clubId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'club/detail',
                  params: { id: clubId }
              }).success(function (response) {
                  return response;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getVgos: function (clubId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'vgo/list',
                  params: { clubId: clubId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getStars: function (clubId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'vgo/list',
                  params: {clubId: clubId, star: 1}
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getPics: function (clubId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'club/album',
                  params: { clubId: clubId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getScore: function (clubId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'score/club',
                  params: { clubId: clubId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getNews: function (clubId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'news/list',
                  params: { clubId: clubId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getNewsdetail: function (newsId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'news/detail',
                  params: { id: newsId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getActivities: function (clubId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'activity/list',
                  params: { clubId: clubId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getActivity: function (activityId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'activity/detail',
                  params: { id: activityId }
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
