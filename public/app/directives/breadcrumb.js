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
                    if (currentRoutes[1] == 'news') {
                        $scope.breadcrumb[1] = { "link": "/alliances/news", "name": "联盟新闻" };
                    }
                    if (currentRoutes[1] == 'clubs-rank') {
                        $scope.breadcrumb[1] = { "link": "/alliances/clubsrank", "name": "俱乐部排名" };
                    }
                    if (currentRoutes[1] == 'vgos-rank') {
                        $scope.breadcrumb[1] = { "link": "/alliances/vgosrank", "name": "Vgo排名" };
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
                if (currentRoutes[0] == 'vgo') {
                    $scope.breadcrumb[0] = { "link": "/vgo", "name": "VGO"};
                    if (currentRoutes[1] == 'allstars') {
                        $scope.breadcrumb[1] = { "link": "/vgo/allstars", "name": "全明星VGO"};
                    }
                }
                if (currentRoutes[0] == 'train') {
                    $scope.breadcrumb[0] = { "link": "/train", "name": "培训与学院"};
                    if (currentRoutes[1] == 'allstars') {
                        $scope.breadcrumb[1] = { "link": "/vgo/allstars", "name": "全明星VGO"};
                    }
                }
            }
        }
    }]);
