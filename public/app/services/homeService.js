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
      }
    };

    return output;
  }]);
