angular
    .module('hshs').controller('vgosController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'allianceService', 'clubService', 'cityService', function($rootScope, $scope, $routeParams, $sce, $localStorage, allianceService, clubService, cityService) {
        var allianceId, clubId;
        allianceId = parseInt($routeParams.allianceId);
        clubId = parseInt($routeParams.clubId);
        $scope.allianceId = allianceId;
        clubId = parseInt($routeParams.clubId);
        $scope.clubId = clubId;
        clubService.getVgos(clubId).then(function(data) {
            $scope.vgos = data.data.result;
        });
        clubService.getDetail(clubId).then(function(data) {
            $scope.clubDetail = data.data;
        });
    }]);
