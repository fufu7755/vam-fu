angular
    .module('hshs').controller('allianceController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'allianceService', 'clubService', 'cityService', function($rootScope, $scope, $routeParams, $sce, $localStorage, allianceService, clubService, cityService) {
        var newsId;
        newsId = parseInt($routeParams.newsId);
        $scope.ready = false;
        allianceService.getAll().then(function(data) {
            $scope.alliances = data.data.result;
            $scope.ready = true;
        });

        allianceService.getAlliancenews(newsId).then(function(data) {
            $scope.News = data.data;
            $scope.Description = $sce.trustAsHtml(data.data.content);

        });
        allianceService.getAllclubs().then(function (data) {

            $scope.Allclubs = data.data.result;
        });
        clubService.getVgos().then(function(data) {

            $scope.vgos = data.data.result;
        });

        allianceService.getBack().then(function (data) {
            $scope.back = data.data;
            console.log(data.data);
        });
    }]);
