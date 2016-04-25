angular
    .module('hshs').controller('loginController', ['$rootScope', '$scope', 'userService', function ($rootScope, $scope, userService) {
        $scope.login = function () {
            userService.login($scope.user);
        };

        $scope.logout = function () {
            userService.logout($rootScope.currentUser.id);
        };
        userService.getClubs().then(function (data) {
            $scope.clubs = data.data.result;
            console.log($scope.clubs);
            $scope.register = function () {
                userService.register($scope.user);
                console.log($scope.user);
            };
        });
    }]);