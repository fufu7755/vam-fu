angular
    .module('hshs').directive('breadcrumb', [function() {
        return {
            restrict: 'E',
            templateUrl: "/app/directives/breadcrumb.html",
            controller: function($scope, $location, allianceService, clubService, vgoService, eventsService) {
                var currentRoutes = $location.path().match(/\w+/g);
                $scope.breadcrumb = [];
                if (currentRoutes[0] == 'alliances') {
                    $scope.breadcrumb[0] = { "link": "/alliances", "name": "VMA联盟" };

                    if (currentRoutes[0] == 'alliances' && currentRoutes[1] != undefined) {
                        var allianceId = parseInt(currentRoutes[1]);
                        allianceService.getAll().then(function(data) {
                            $scope.breadcrumb[1] = { "link": "/alliances/" + allianceId + "/clubs", "name": allianceService.getName(data.data.result, allianceId) };
                        })
                    }
                    if (currentRoutes[2] == 'clubs' && currentRoutes[3] != undefined) {
                        var clubId = parseInt(currentRoutes[3]);
                        clubService.getDetail(clubId).then(function(data) {
                            $scope.breadcrumb[2] = { "link": "/alliances/" + allianceId + "/clubs/" + clubId, "name": data.data.name };
                        })
                    }
                }
                if (currentRoutes[0] == 'events') {
                    $scope.breadcrumb[0] = { "link": "/events", "name": "VMA赛事"};

                    if (currentRoutes[0] == 'events' && currentRoutes[1] != undefined) {
                        var eventId = parseInt(currentRoutes[1]);
                        eventsService.getEvent(eventId).then(function(data) {
                            $scope.breadcrumb[1] = { "link": "/events/" + eventId + "/event",  "name": data.data.name };
                            
                        })
                    }
                    
                }
                if (currentRoutes[0] == 'about') {
                    $scope.breadcrumb[0] = { "link": "/about", "name": "关于VMA"};
                }
            }
        }
    }]);
