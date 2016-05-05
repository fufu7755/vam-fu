angular
    .module('hshs').factory('applyService', ['$rootScope', '$localStorage', '$http', '$location', '$route', 'toaster', 'baseUrl', function ($rootScope, $localStorage, $http, $location, $route, toaster, baseUrl) {
        var applyService = {};
        output = {

            applyEvent: function (vgoInfo) {
                var diseaseHistory = _.map(vgoInfo.diseases).join(',');
                if (vgoInfo.diseasemore != undefined) {
                    diseaseHistory = diseaseHistory + ',' + vgoInfo.diseasemore;
                }
                console.log(diseaseHistory);

                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'event/signUp',
                    params: {
                        token: $localStorage.currentUser,
                        contact: vgoInfo.contact,
                        contactTel: vgoInfo.contactTel,
                        eventId: vgoInfo.eventId,
                        bloodType: vgoInfo.bloodType,
                        jacketSize: vgoInfo.jacketSize,
                        trousersSize: vgoInfo.trousersSize,
                        shoesSize: vgoInfo.shoesSize,
                        address: vgoInfo.address,
                        postCode: vgoInfo.postCode,
                        diseaseHistory: diseaseHistory
                    }
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', response.message);
                        $('#ModalApplyEvent').modal('hide');
                    } else {
                        if (response.statusCode === 2) {
                            toaster.pop('warning', response.message);
                        }
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            allCities: function () {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'regions/list',
                    params: {
                        level: 1
                    }
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            allianceApply: function (apply) {
                console.log(apply);
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'alliance/apply',
                    params: {
                        cityId: apply.city,
                        contact: apply.contact,
                        mobile: apply.mobile,
                        remark: apply.remark
                    }
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', response.message);
                        $('#ModalAlliance').modal('hide');
                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            clubApply: function (club) {
                console.log(club);
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'club/apply',
                    params: {
                        name: club.name,
                        contact: club.contact,
                        mobile: club.mobile,
                        cityId: club.city,
                        slogan: club.slogan,
                        address: club.address,
                        description: club.description,
                        logo: club.upClublogo
                    }
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', response.message);
                        $('#ModalClub').modal('hide');
                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            }

        };
        return output;
    }]);