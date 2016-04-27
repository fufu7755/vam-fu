angular
    .module('hshs').controller('headerController', ['$rootScope', '$localStorage', '$scope', '$routeParams', '$location', '$timeout', 'userService', function ($rootScope, $localStorage, $scope, $routeParams, $location, $timeout, userService) {
        var currentRoute = $location.path().split('/');

        $scope.setActive = function (menuItem) {
            return menuItem == currentRoute[1] ? "active" : "";
        };
        console.log($localStorage);
        if ($localStorage.keep != true) {
            if ($localStorage.currentUser) {
                $timeout(function () {
                    userService.logout($localStorage.currentUser);
                }, 1800000);
            }
        }
        if ($localStorage.currentUser) {
            userService.getUser($localStorage.currentUser).then(function (data) {
                $rootScope.rootcurrentUser = data.data;
                console.log(data.data);
            });
        }

    }]);