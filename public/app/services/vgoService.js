angular
  .module('hshs').factory('vgoService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
      var promise = {};

      output = {
          getVgo: function (vgoId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'vgo/public',
                  params: { id: vgoId }
              }).success(function (response) {
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getEquipment: function (vgoId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'equipment/list',
                  params: { id: vgoId }
              }).success(function (response) {                
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getScore: function (vgoId) {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'score/vgo',
                  params: { id: vgoId }
              }).success(function (response) {                
                  return response.result;
              }).error(function (data, status) {
                  console.log(status);
              });
              return promise;
          },
          getVgohome: function () {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'vgo/background',
                  params: {}
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
                  params: {pageSize: 999},
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
                  params: {'type': 'vgo'}
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
