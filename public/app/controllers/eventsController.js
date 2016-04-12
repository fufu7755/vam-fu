angular
  .module('hshs').controller('eventsController', ['$rootScope', '$scope', '$routeParams', '$sce', 'eventsService', 'matchService', 'cityService', function ($rootScope, $scope, $routeParams, $sce, eventsService, matchService, cityService) {
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
      $scope.eventVideo = $sce.trustAsHtml(data.data.vedio);
      console.log(data.data);
    });

    eventsService.getAlbum().then(function(data){
      $scope.album = data.data.result;
      
    });

    eventsService.getNews().then(function(data){
      $scope.newsAll = data.data.result;
      
    });

    $scope.matchSearchSelected = {
      status: null,
      city: null
    };

    var status = $scope.matchSearchSelected.status;
    var city = $scope.matchSearchSelected.city;

    matchService.getAll(status, city).then(function(data) {
      console.log(data);
      $scope.matches = data.data.result;
    });

    cityService.getAll().then(function(data) {
      $scope.cities = data.data;
    });

    $scope.matchCitiesRender = function() {
      status = $scope.matchSearchSelected.status;
      city = $scope.matchSearchSelected.city;
      matchService.getAll(status, city).then(function(data) {
        $scope.matches = data.data.result;
        /*$scope.cities = _.map(data.data.result, 'city');*/
      });
    };

    /*$scope.matchSearch = function() {
      status = $scope.matchSearchSelected.status;
      city = $scope.matchSearchSelected.city;
      matchService.getAll(status, city).then(function(data) {
        $scope.matches = data.data.result;
      });
    }*/
  }]);