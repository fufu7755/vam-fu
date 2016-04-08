angular
  .module('hshs').controller('clubController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'allianceService', 'clubService', 'cityService', function ($rootScope, $scope, $routeParams, $sce, $localStorage, allianceService, clubService, cityService) {

    var allianceId, clubId, cities;
    allianceId = parseInt($routeParams.allianceId);
    clubId = parseInt($routeParams.clubId);
    newsId = parseInt($routeParams.newsId);
    $scope.allianceId = allianceId;
    $scope.clubId = clubId;
    $scope.newsId = newsId;
    if ($routeParams.clubId) {
      clubId = $routeParams.clubId;

      $scope.ready = false;
      clubService.getDetail(clubId).then(function(data) {
        $scope.allianceName = $localStorage.vmaAllianceName;

        $scope.clubDetail = data.data;
        $scope.clubDescription = $sce.trustAsHtml(data.data.description);
        if ($localStorage.vmaCity === undefined) {
          cityService.getAll().then(function(data) {
            $scope.cityName = cityService.getName(cities);
          });
        } else {
          cities = $localStorage.vmaCity;
          $scope.cityName = cityService.getName(cities, data.data.cityId);
        }
        $scope.ready = true;
      });

      clubService.getPics(clubId).then(function(data) {
        
        $scope.Pics = data.data.result;
      });
      clubService.getScore(clubId).then(function(data) {
        
        $scope.Scores = data.data.result;
      });
      clubService.getNews(clubId).then(function(data) {
        
        $scope.News = data.data.result;
        
      });
      clubService.getNewsdetail(newsId).then(function(data) {
        console.log(data.data);
        $scope.Newsdeatil = data.data;
        $scope.newsDescription = $sce.trustAsHtml(data.data.content);
      });
    }

  }]);