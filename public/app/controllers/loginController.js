angular
    .module('hshs').controller('loginController', ['$rootScope', '$localStorage', '$scope', 'userService', function ($rootScope, $localStorage, $scope, userService) {
        $scope.login = function () {
            userService.login($scope.user).then(function (data) {
                if (data.data.statusCode === 0) {
                    userService.getUser($localStorage.currentUser).then(function (data) {
                        $rootScope.rootcurrentUser = data.data;
                        console.log($rootScope.rootcurrentUser);
                    })
                }
            });
        };

    }]);