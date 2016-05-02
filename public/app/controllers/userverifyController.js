angular
    .module('hshs').controller('userverifyController', ['$rootScope', '$localStorage', '$scope', '$interval', 'passwordService', function ($rootScope, $localStorage, $scope, $interval, passwordService) {

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
            passwordService.getRandomPic($localStorage.randomNum).then(function (data) {
                $scope.randomPic = data.data;

            });
        }

        $scope.newRandompic = function () {
            $localStorage.randomNum = new Date().getTime() + random(7);
            passwordService.getRandomPic($localStorage.randomNum).then(function (data) {
                $scope.randomPic = data.data;

            });
        };

        $scope.userVerify = function () {
            passwordService.userVerify($scope.user);
        };

        var second = 60;
        var timePromise;
        $scope.codeButtonvalue = "获取验证码";
        $scope.getSmscode = false;
        $scope.getCode = function () {
            passwordService.getCode().then(function (data) {

                if (data.data.statusCode === 0) {

                    timePromise = undefined;
                    timePromise = $interval(function () {
                        if (second <= 0) {
                            $interval.cancel(timePromise);
                            timePromise = undefined;
                            second = 60;
                            $scope.codeButtonvalue = "获取验证码";
                            $scope.getSmscode = false;
                        } else {
                            $scope.codeButtonvalue = "重新发送" + second + "秒";
                            $scope.getSmscode = true;
                            second--;
                        }
                    }, 1000, 100);
                }
            });
        };

        $scope.verifySmsCode = function () {

            passwordService.verifySmsCode($scope.user);
        };
        $scope.paraSuccess = false;
        $scope.resetnewPassword = function () {

            passwordService.newPassword($scope.user).then(function (data) {

                if (data.data.statusCode === 0) {
                    $scope.paraSuccess = true;
                }
            });
        };
    }]);