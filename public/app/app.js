'use strict';

angular.module('hshs', [
  'ngRoute',
  'ngSanitize',
  'ngStorage',
  'toaster',
  'angularUtils.directives.dirPagination',
  'ui.mask'
]).
constant(
  'baseUrl', 'http://222.240.208.174:8083/vma/api/'
).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', { templateUrl: 'views/pages/home.html' })
      .when('/alliances', { templateUrl: 'views/pages/alliances.html' })
      .when('/alliances/:allianceId/clubs', { templateUrl: 'views/pages/clubs.html' })
      .when('/alliances/:allianceId/clubs/:clubId', { templateUrl: 'views/pages/club.html' })
      .when('/alliances/:allianceId/clubs/:clubId/vgos', { templateUrl: 'views/pages/vgos.html' })
      .when('/alliances/:allianceId/clubs/:clubId/vgos/:vgoId', { templateUrl: 'views/pages/vgo.html' })
      .when('/alliances/:allianceId/clubs/:clubId/score', { templateUrl: 'views/pages/score.html' })
      .when('/alliances/:allianceId/clubs/:clubId/news', { templateUrl: 'views/pages/news.html' })
      .when('/alliances/:allianceId/clubs/:clubId/news/:newsId', { templateUrl: 'views/pages/news-detail.html' })
      .otherwise({ redirectTo: '/' });
}]).run([
    '$rootScope',
    '$location',
    'userService',
    function ($rootScope, $location, userService) {
    }
]);
