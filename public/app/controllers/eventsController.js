angular
  .module('hshs').controller('eventsController', ['$rootScope', '$scope', '$routeParams', '$sce', 'eventsService', function ($rootScope, $scope, $routeParams, $sce, eventsService) {
  	var eventId;
    eventId = parseInt($routeParams.eventId);
    $scope.ready = false;
    eventsService.getAll().then(function(data) {
      $scope.events = data.data.result;
      $scope.ready = true;
      
    });

    eventsService.getEvent(eventId).then(function(data) {
      $scope.event = data.data;
      $scope.eventDescription = $sce.trustAsHtml(data.data.description);
      
    });

    eventsService.getAlbum().then(function(data){
      $scope.album = data.data.result;
      
    });

    eventsService.getNews().then(function(data){
      $scope.newsAll = data.data.result;
      console.log(data.data.result);
    });

  }]);