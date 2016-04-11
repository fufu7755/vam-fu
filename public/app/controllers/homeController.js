angular
    .module('hshs').controller('homeController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'homeService', function($rootScope, $scope, $routeParams, $sce, $localStorage, homeService) {
        
        homeService.getNewevents().then(function(data) {
            $scope.newEvents = data.data;
        });
        homeService.getStars().then(function(data) {
            $scope.Stars = data.data;
        });
        homeService.getAlliances().then(function(data) {
            $scope.Alliances = data.data;
            
        });
        homeService.getImport().then(function(data) {
            $scope.Import = data.data;
            
        });
        homeService.getSponsors().then(function(data) {
            $scope.Sponsors = data.data;
           
        });
        homeService.getSlides().then(function(data) {
            $scope.Slides = data.data;
           	console.log($scope.Slides);
        });
    }]);
