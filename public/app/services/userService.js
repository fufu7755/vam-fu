angular
    .module('hshs').factory('userService', ['$rootScope', '$localStorage', '$http', '$location', '$route', 'toaster', 'baseUrl', function ($rootScope, $localStorage, $http, $location, $route, toaster, baseUrl) {

        var userService = {};

        output = {
            login: function (user) {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'vgo/login',
                    params: {mobile: user.account, password: user.password},
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', '您已成功登录');
                        $location.path('/');
                        $route.reload();
                        $localStorage.currentUser = response.data;
                        console.log($localStorage.currentUser);
                        $('#ModalLogin').modal('hide');
                        if (user.keep == true) {
                            $localStorage.keep = true;
                        }
                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            logout: function (token) {
                promise = $http({
                    method: 'POST',
                    url: 'http://222.240.208.174:8083/vma/api/vgo/logout',
                    params: {token: token},
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', '您已成功登出');
                        $location.path('/');
                        $localStorage.currentUser = '';
                        $localStorage.keep = false;
                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            register: function (user) {
                var diseaseHistory = _.map(user.diseases).join(',');
                if (user.diseasemore != undefined) {
                    user.diseaseHistory = diseaseHistory + ',' + user.diseasemore;
                }
                if (user.year != undefined || user.month != undefined || user.day != undefined) {
                    user.birthday = user.year + '-' + user.month + '-' + user.day;
                } else {
                    user.birthday = ''
                }

                console.log(user);
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'vgo/apply',
                    params: {
                        nickName: user.nickName,
                        name: user.name,
                        mobile: user.mobile,
                        code: user.code,
                        password: user.password,
                        certificateType: user.certificateType,
                        certificateNumber: user.certificateNumber,
                        avatar: user.avatar,
                        coolShow: user.coolShow,
                        gender: user.gender,
                        clubId: user.club,
                        birthday: user.birthday,
                        email: user.email,
                        bloodType: user.bloodType,
                        jacketSize: user.jacketSize,
                        trousersSize: user.trousersSize,
                        shoesSize: user.shoesSize,
                        address: user.address,
                        postCode: user.postCode,
                        diseaseHistory: user.diseaseHistory
                    }
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', '您已成功注册');
                        $location.path('/');
                        $('#ModalSignup').modal('hide');
                        $('#ModalLogin').modal('show');
                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            getCaptcha: function (user) {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'vgo/code',
                    params: {
                        mobile: user.mobile
                    }
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        console.log(response);
                        toaster.pop('success', '注册码已成功发送');
                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            getCities: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'regions/list',
                    params: {level: 1}
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getUser: function (token) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'vgo/private',
                    params: {token: token}
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            }
        };

        return output;
    }]);