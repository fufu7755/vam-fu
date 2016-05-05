angular
    .module('hshs').controller('eventsController', ['$rootScope', '$localStorage', '$scope', '$routeParams', '$sce', 'eventsService', 'matchService', 'cityService', function ($rootScope, $localStorage, $scope, $routeParams, $sce, eventsService, matchService, cityService) {
        var eventId;
        eventId = parseInt($routeParams.eventId);
        $scope.ready = false;
        eventsService.getAll().then(function (data) {
            $scope.events = data.data.result;
            $scope.ready = true;

        });

        $scope.isUserLoggedIn = function () {
            if ($localStorage.currentUser) {
                return true;
            } else {
                return false;
            }
        };

        eventsService.getBack().then(function (data) {
            $scope.back = data.data;

        });

        function get_unix_time(dateStr) {
            var newstr = dateStr.replace(/-/g, '/');
            var date = new Date(newstr);
            var time_str = date.getTime().toString();
            return time_str;
        }

        eventsService.getEvent(eventId).then(function (data) {
            $scope.event = data.data;
            console.log(data.data);
            $scope.eventDescription = $sce.trustAsHtml(data.data.description);
            $scope.eventVideo = $sce.trustAsHtml(data.data.vedio);
            var endTime = get_unix_time(data.data.signUpEndTime);
            var startTime = get_unix_time(data.data.signUpStartTime);
            var timestamp = (new Date()).valueOf();

            $scope.signTime = false;
            if (timestamp < endTime && timestamp > startTime) {
                $scope.signTime = true;
            }
        });

        eventsService.getAlbum().then(function (data) {
            $scope.album = data.data;
            console.log(data.data);
        });

        eventsService.getNews().then(function (data) {
            $scope.newsAll = data.data;

        });

        eventsService.getEventnews(eventId).then(function (data) {
            $scope.eventNews = data.data.result;

        });

        $scope.matchSearchSelected = {
            status: null,
            city: null
        };

        var status = $scope.matchSearchSelected.status;
        var city = $scope.matchSearchSelected.city;

        matchService.getAll(status, city).then(function (data) {
            $scope.matches = data.data.result;
        });

        cityService.getAll().then(function (data) {
            $scope.cities = data.data;
        });
        cityService.getEventcities().then(function (data) {
            $scope.eventcities = data.data;
        });
        $scope.matchCitiesRender = function () {
            status = $scope.matchSearchSelected.status;
            city = $scope.matchSearchSelected.city;
            matchService.getAll(status, city).then(function (data) {
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