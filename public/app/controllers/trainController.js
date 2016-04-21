angular
    .module('hshs').controller('trainController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'trainService', function($rootScope, $scope, $routeParams, $sce, $localStorage, trainService) {
        var trainId;
        trainId = parseInt($routeParams.trainId);

        $scope.matchSearchSelected = {
            status: null
        };

        var status = $scope.matchSearchSelected.status;

        trainService.getAll(status).then(function(data) {

            $scope.matches = data.data.result;
        });

        $scope.matchCitiesRender = function() {
            status = $scope.matchSearchSelected.status;
            console.log(status);
            trainService.getAll(status).then(function(data) {
                $scope.matches = data.data.result;
                /*$scope.cities = _.map(data.data.result, 'city');*/
            });
        };

        trainService.getNews().then(function(data){
            $scope.newsAll = data.data.result;

        });

        trainService.getFiles().then(function (data) {
            $scope.filesAll = data.data.result;

        });

        trainService.getManagers().then(function (data) {
            $scope.managers = data.data.result;

        });

        trainService.getCoaches().then(function (data) {
            $scope.coaches = data.data.result;
            console.log(data.data.result);
        });

        trainService.getVolunteers().then(function (data) {
            $scope.volunteers = data.data.result;
            console.log(data.data.result);
        });

        trainService.getTrain(trainId).then(function(data){
            $scope.Train = data.data;
            $scope.video = $sce.trustAsHtml(data.data.video);
            $scope.specification = $sce.trustAsHtml(data.data.specification);

        });

        trainService.getBack().then(function (data) {
            $scope.back = data.data;
            console.log(data.data);
        });

    }]);