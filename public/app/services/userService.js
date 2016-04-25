angular
  .module('hshs').factory('userService', ['$rootScope', '$http', '$location', 'toaster', 'baseUrl', function ($rootScope, $http, $location, toaster, baseUrl) {

      var userService = {};

      output = {
          login: function(user) {
              promise = $http({
                  method: 'POST',
                  url: baseUrl + 'vgo/login',
                  params: { mobile: user.account, password: user.password },
              }).success(function (response) {
                  if (response.statusCode === 0) {
                    toaster.pop('success', '您已成功登录');
                    $location.path('/');
                    $rootScope.currentUser = response.data;
                    console.log($rootScope.currentUser);
                    $('#ModalLogin').modal('hide');
                  } else {
                    toaster.pop('warning', response.message);
                  }
              }).error(function (data, status) {
                  toaster.pop('warning', '请稍后再试');
              });
              return promise;
          },
          logout: function(userId) {
            promise = $http({
              method: 'POST',
              url: baseUrl + 'logout',
              params: { userId: userId },
            }).success(function (response) {
              if (response.code === 0) {
                toaster.pop('success', '您已成功登出');
                $location.path('/');
                $rootScope.currentUser = '';
              } else {
                toaster.pop('warning', response.msg);
              }
            }).error(function (data, status) {
              toaster.pop('warning', '请稍后再试');
            });
            return promise;
          },
          register: function(user) {
              console.log(user)
              var birthday = user.year + '-' + user.month + '-' + user.day;
            promise =  $http({
              method: 'POST',
              url: baseUrl + 'vgo/apply',
              params: {
                  nickName:user.nickName,
                  name: user.name,
                  mobile: user.mobile,
                  code: user.code,
                  password: user.password,
                  certificateType: user.certificateType,
                  certificateNumber: user.certificateNumber,
                  avatar:user.avatar,
                  coolShow:user.coolShow,
                  gender:user.gender,
                  clubId:140,
                  birthday:birthday,
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
          getCaptcha: function(user) {
            promise =  $http({
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
          getClubs: function () {
              promise = $http({
                  method: 'GET',
                  url: baseUrl + 'club/list',
                  params: {}
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