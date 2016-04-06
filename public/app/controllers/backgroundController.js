angular
    .module('hshs').controller('backgroundController', ['$rootScope', '$scope', '$http', 'backgroundService', '$location', function ($rootScope, $scope, $http, backgroundService, $location) {
        backgroundService.get();

        backgroundService.get().then(function(data) {
            console.log(data.data);
            $scope.background = data.data;
        })
    }]);

