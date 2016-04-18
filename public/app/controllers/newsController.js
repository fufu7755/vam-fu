angular
    .module('hshs').controller('newsController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'clubService', function ($rootScope, $scope, $routeParams, $sce, $localStorage, clubService) {

        var newsId;
        newsId = parseInt($routeParams.newsId);

        $scope.newsId = newsId;

        clubService.getNewsdetail(newsId).then(function (data) {
            console.log(data.data);
            $scope.Newsdeatil = data.data;
            $scope.newsDescription = $sce.trustAsHtml(data.data.content);
        });

    }]);