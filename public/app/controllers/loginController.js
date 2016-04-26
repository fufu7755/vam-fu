angular
    .module('hshs').controller('loginController', ['$rootScope', '$localStorage', '$scope', 'userService', function ($rootScope, $localStorage, $scope, userService) {
        $scope.login = function () {
            userService.login($scope.user);
        };

        $scope.isUserLoggedIn = function () {
            if ($localStorage.currentUser) {
                return true;
            } else {
                return false;
            }
        };

        $scope.logout = function () {
            userService.logout($localStorage.currentUser);
        };


    }]);