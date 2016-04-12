angular
    .module('hshs').controller('aboutController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'aboutService', function($rootScope, $scope, $routeParams, $sce, $localStorage, aboutService) {

        aboutService.getAbout().then(function(data) {
            $scope.About = data.data;
            $scope.Content = $sce.trustAsHtml(data.data.content);
            console.log(data.data);
        });

    }]);