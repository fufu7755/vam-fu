angular
    .module('hshs').controller('registerController', ['$scope', 'userService', 'clubService', function ($scope, userService, clubService) {

        $scope.getCaptcha = function () {
            userService.getCaptcha($scope.user);
        };

        $scope.register = function () {
            userService.register($scope.user);
        };


        clubService.getAll().then(function (data) {
            $scope.clubs = data.data.result;

        });

        userService.getCities().then(function (data) {
            $scope.cities = data.data;

        });

        $scope.diseases = [
            '无疾病史',
            '先天性心脏病和风湿性心脏病患',
            '高血压和脑血管疾病患',
            '冠状动脉患和严重心律不齐患',
            '血糖过高或者过少的糖尿病患',
            '恐高症或者其他相关恐惧症患',
            '心肌炎和其它心脏病患'
        ];
        $scope.years = [
            '1980', '1981', '1982', '1983', '1984', '1985', '1986'
        ];
        $scope.months = [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ];

    }]);