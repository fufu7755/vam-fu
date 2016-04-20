angular
  .module('hshs').controller('headerController', ['$rootScope', '$scope', '$routeParams', '$location', function ($rootScope, $scope, $routeParams, $location) {
    var currentRoute = $location.path().split('/');

    $scope.setActive = function(menuItem) {
      return menuItem == currentRoute[1] ? "active" : "";
    }


      $scope.setActive2 = function (menuItem) {

        if (menuItem != 'null') {
          return menuItem == currentRoute[2] ? "active" : "";
          if (menuItem == 'manager') {
            return "active";
          }
        }

      }

  }]);