angular
  .module('hshs').controller('headerController', ['$rootScope', '$scope', '$routeParams', '$location', function ($rootScope, $scope, $routeParams, $location) {
    var currentRoute = $location.path().split('/');

    $scope.setActive = function(menuItem) {
      return menuItem == currentRoute[1] ? "active" : "";
    }


      $scope.setActive2 = function (menuItem) {
        console.log(menuItem);
        if (currentRoute[2] != '') {
          return menuItem == currentRoute[2] ? "active" : "";

        }
      }

  }]);