angular
    .module('hshs').controller('partnerController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'partnerService', function($rootScope, $scope, $routeParams, $sce, $localStorage, partnerService) {

        partnerService.getAll().then(function(data) {
            $scope.Partners = data.data.result;

        });

    }]);
