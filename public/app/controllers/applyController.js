angular
    .module('hshs').controller('applyController', ['$rootScope', '$localStorage', '$scope', '$routeParams', 'applyService', function ($rootScope, $localStorage, $scope, $routeParams, applyService) {
        var eventId;
        eventId = parseInt($routeParams.eventId);

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

    }]);