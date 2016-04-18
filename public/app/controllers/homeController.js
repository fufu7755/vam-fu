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
           	
        });
        homeService.getClubs().then(function(data) {

            console.log(data.data);
        });
        homeService.getAlliannews().then(function(data) {
            $scope.Alliannews = data.data;
            
        });
        homeService.getEventnews().then(function(data) {

            console.log(data.data);
            $scope.Eventnews = data.data;
            $scope.newsDescription = $sce.trustAsHtml(data.data.content);
        });
    }]);
