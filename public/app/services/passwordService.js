angular
    .module('hshs').factory('passwordService', ['$rootScope', '$localStorage', '$http', '$location', '$route', 'toaster', 'baseUrl', function ($rootScope, $localStorage, $http, $location, $route, toaster, baseUrl) {

        output = {
            getRandomPic: function (random) {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'password/picCode',
                    params: {
                        random: random
                    }
                }).success(function (response) {
                    if (response.statusCode === 0) {

                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            userVerify: function (user) {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'password/verify',
                    params: {
                        mobile: user.mobile,
                        code: user.code,
                        random: $localStorage.randomNum
                    },
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        var phone = user.mobile;
                        var mphone = phone.substr(3, 4);
                        $rootScope.mobile = phone.replace(mphone, "****");
                        $rootScope.usermobile = user.mobile;
                        $('#ModalPassword1').modal('hide');
                        $('#ModalPassword2').modal('show');

                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            getCode: function () {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'password/smsCode',
                    params: {
                        mobile: $rootScope.usermobile
                    },
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', '验证码已成功发送');
                    } else {
                        toaster.pop('warning', response.message);
                        console.log($rootScope.usermobile);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            verifySmsCode: function (user) {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'password/verifySmsCode',
                    params: {
                        mobile: user.mobile,
                        smsCode: user.smsCode
                    },
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        $rootScope.token = response.data
                        $('#ModalPassword2').modal('hide');
                        $('#ModalPassword3').modal('show');
                    } else {
                        toaster.pop('warning', response.message);
                    }
                }).error(function (data, status) {
                    toaster.pop('warning', '请稍后再试');
                });
                return promise;
            },
            newPassword: function (user) {
                promise = $http({
                    method: 'POST',
                    url: baseUrl + 'vgo/resetPassword',
                    params: {
                        token: $rootScope.token,
                        password: user.password
                    },
                }).success(function (response) {
                    if (response.statusCode === 0) {
                        toaster.pop('success', '密码修改成功！');
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