angular
    .module('hshs').controller('registerController', ['$scope', 'userService', 'clubService', function ($scope, userService, clubService) {

        $scope.getCaptcha = function () {
            userService.getCaptcha($scope.user);
        };

        $scope.register = function () {
            userService.register($scope.user);
        };

        $scope.user = {
            diseases: []
        };

        clubService.getAll().then(function (data) {
            $scope.clubs = data.data.result;

        });

        userService.getCities().then(function (data) {
            $scope.cities = data.data;

        });

        $scope.upAvatar = function () {
            $('#upForm').ajaxSubmit({
                type: 'post',
                url: 'http://222.240.208.174:8083/vma/upload/uploadfile',
                success: function (data) {
                    console.log(data);
                    $scope.user.avatar = data.path;
                    console.log($scope.user);
                    var host = 'http://222.240.208.174:8083';
                    var imgPrefix = host + '/vma/download/img?url=';
                    $("#avatar").attr("src", imgPrefix + data.path).show();
                }
            });
        }

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
            '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969',
            '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
            '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
            '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
        ];
        $scope.months = [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ];
        $scope.days = [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
            '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
        ];
    }]);