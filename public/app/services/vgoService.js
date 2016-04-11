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
          }
      };

      return output;
   }]);
