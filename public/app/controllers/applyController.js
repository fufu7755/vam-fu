angular
    .module('hshs').controller('applyController', ['$rootScope', '$localStorage', '$scope', '$routeParams', 'userService', 'applyService', function ($rootScope, $localStorage, $scope, $routeParams, userService, applyService) {
        var eventId;
        eventId = parseInt($routeParams.eventId);

        userService.getCities().then(function (data) {
            $scope.allcities = data.data;

        });

        $scope.vgoInfo = {
            diseases: [],
            eventId: eventId
        };

        $scope.diseases = [
            '无疾病史',
            '先天性心脏病和风湿性心脏病患',
            '高血压和脑血管疾病患',
            '冠状动脉患和严重心律不齐患',
            '血糖过高或者过少的糖尿病患',
            '恐高症或者其他相关恐惧症患',
            '心肌炎和其它心脏病患'
        ];

        $scope.applyEvent = function () {
            applyService.applyEvent($scope.vgoInfo);
        };

        $scope.applyAlliance = function () {
            applyService.allianceApply($scope.apply);
        };

        $scope.club = {};
        $scope.upClublogo = function () {
            $('#upForm3').ajaxSubmit({
                type: 'post',
                url: 'http://222.240.208.174:8083/vma/upload/uploadfile',
                success: function (data) {
                    console.log(data);
                    $scope.club.upClublogo = data.path;

                    var host = 'http://222.240.208.174:8083';
                    var imgPrefix = host + '/vma/download/img?url=';
                    $("#clublogo").attr("src", imgPrefix + data.path).show();
                }
            });

        }

        $scope.applyclub = function () {
            applyService.clubApply($scope.club);
        }

    }]);