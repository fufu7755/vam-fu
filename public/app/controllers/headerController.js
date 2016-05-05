angular
    .module('hshs').controller('headerController', ['$rootScope', '$localStorage', '$scope', '$routeParams', '$location', '$timeout', 'userService', function ($rootScope, $localStorage, $scope, $routeParams, $location, $timeout, userService) {
        var currentRoute = $location.path().split('/');

        $scope.setActive = function (menuItem) {
            return menuItem == currentRoute[1] ? "active" : "";
        };

        if ($localStorage.keep != true) {
            if ($localStorage.currentUser) {
                $timeout(function () {
                    userService.logout($localStorage.currentUser);
                }, 1800000);
            }
        }
        $scope.isUserLoggedIn = function () {
            if ($localStorage.currentUser) {
                return true;
            } else {
                return false;
            }
        };
        if ($localStorage.currentUser) {
            userService.getUser($localStorage.currentUser).then(function (data) {
                $rootScope.rootcurrentUser = data.data;
                console.log($rootScope.rootcurrentUser);
            });
        }

        $scope.logout = function () {
            userService.logout($localStorage.currentUser);
        };
    }]);