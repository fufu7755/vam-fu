angular
    .module('hshs').controller('homeController', ['$rootScope', '$scope', '$routeParams', '$sce', '$interval', '$localStorage', 'homeService', function ($rootScope, $scope, $routeParams, $sce, $interval, $localStorage, homeService) {
        
        homeService.getNewevents().then(function(data) {
            $scope.newEvents = data.data;
        });
        homeService.getStars().then(function(data) {
            $scope.Stars = data.data;

        });
        homeService.getAlliances().then(function(data) {
            $scope.Alliances = data.data;

        });

        function random(m) {
            var num = '';
            for (var i = 0; i < m; i++) {
                var val = parseInt(Math.random() * 10, 10);
                if (i === 0 && val === 0) {
                    i--;
                    continue;
                }
                num += val;
            }
            return num;
        }

        function dhms(t) {
            var days, hours, minutes, seconds, days1, hours1;
            days = Math.floor(t / 86400);

            t -= days * 86400;
            hours = Math.floor(t / 3600) % 24;
            t -= hours * 3600;
            minutes = Math.floor(t / 60) % 60;
            t -= minutes * 60;
            seconds = t % 60;
            return [
                '<span>' + days + '<br><small>天</small></span>',
                '<span>' + hours + '<br><small>时</small></span>',
                '<span>' + minutes + '<br><small>分</small></span>',
                '<span>' + seconds + '<br><small>秒</small></span>'
            ].join(' ');
        }
        homeService.getImport().then(function(data) {
            $scope.Import = data.data;
            var returnDate;
            returnDate = $interval(function () {
                var diff;
                diff = Math.floor((data.data.timestamp - new Date().getTime()) / 1000);
                $scope.returnDate = $sce.trustAsHtml(dhms(diff));
            }, 1000, 100);


        });
        homeService.getSponsors().then(function(data) {
            $scope.Sponsors = data.data;

        });
        homeService.getSlides().then(function(data) {
            $scope.Slides = data.data;
           	
        });
        homeService.getClubs().then(function(data) {
            $scope.Clubs = data.data;

        });
        homeService.getAlliannews().then(function(data) {
            $scope.Alliannews = data.data;

        });
        homeService.getAd().then(function (data) {
            $scope.Ad = data.data;

        });
        homeService.getEventnews().then(function (data) {
            $scope.Eventnews = data.data;
            $scope.newsDescription = $sce.trustAsHtml(data.data.content);
        });

        $scope.subscriber = function () {

            homeService.subscriber($scope.newletter);
        };
    }]);
