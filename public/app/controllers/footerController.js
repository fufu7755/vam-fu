angular
    .module('hshs').controller('footerController', ['$scope', '$sce', 'footerService', function ($scope, $sce, footerService) {
        footerService.getExteriorLink().then(function (data) {
            $scope.exteriorLink = data.data;
            console.log(data.data);
        });

        $scope.weibo = $sce.trustAsResourceUrl('http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=300&fansRow=2&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=5821468727&verifier=a1d3fcf4&dpc=1');
    }]);