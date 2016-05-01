angular
    .module('hshs').controller('userverifyController', ['$rootScope', '$localStorage', '$scope', 'userService', function ($rootScope, $localStorage, $scope, userService) {

        $localStorage.randomNum = new Date().getTime() + random(7);

        function random(m) {
            var num = '';
            for (var i = 0; i < m; i++) {
                var val = parseInt(Math.random() * 10, 10);
                if (i === 0 && val === 0) {
                    i--;
                    continue;
                }
                num += val;
            }
            return num;
        }

        if ($localStorage.randomNum != null) {
            userService.getRandomPic($localStorage.randomNum).then(function (data) {
                $scope.randomPic = data.data;
                console.log(data);

            });
        }

        $scope.newRandompic = function () {
            $localStorage.randomNum = new Date().getTime() + random(7);
            userService.getRandomPic($localStorage.randomNum).then(function (data) {
                $scope.randomPic = data.data;
                console.log(data);
            });
        };

        $scope.userVerify = function () {
            userService.userVerify($scope.user);
        };

        $rootScope.codeButtonvalue = "获取验证码";
        $rootScope.getSmscode = false;
        $scope.getCode = function () {
            userService.getCode();
        }
    }]);