angular
    .module('hshs').controller('homeController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'homeService', function($rootScope, $scope, $routeParams, $sce, $localStorage, homeService) {
        
        homeService.getNewevents().then(function(data) {
            $scope.newEvents = data.data;
            console.log(data.data);
        });

    }]);
