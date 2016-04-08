angular
    .module('hshs').controller('vgoController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'allianceService', 'clubService', 'vgoService', 'cityService', function($rootScope, $scope, $routeParams, $sce, $localStorage, allianceService, clubService, vgoService, cityService) {
        var allianceId, clubId;
        allianceId = parseInt($routeParams.allianceId);
        clubId = parseInt($routeParams.clubId);
        $scope.allianceId = allianceId;
        clubId = parseInt($routeParams.clubId);
        $scope.clubId = clubId;
        vgoId = parseInt($routeParams.vgoId);
        $scope.vgoId = vgoId;
        vgoService.getVgo(vgoId).then(function(data) {
        	console.log(data.data);
            $scope.vgo = data.data;
        });
        vgoService.getEquipment(vgoId).then(function(data) {
            console.log(data.data.result);
            $scope.equipments = data.data.result;
        });
        vgoService.getScore(vgoId).then(function(data) {
            console.log(data.data.result);
            $scope.scores = data.data.result;
        });
    }]);