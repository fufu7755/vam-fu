angular
    .module('hshs').controller('homeController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'homeService', function($rootScope, $scope, $routeParams, $sce, $localStorage, hoemService) {

        $scope.ready = false;
        allianceService.getAll().then(function(data) {
            $scope.alliances = data.data.result;
            $scope.ready = true;
        });

    }]);