(function () {
'use strict';

angular.module('Login')
.controller('LoginController', LoginController);

LoginController.$inject = ['UserService', 'AuthService', '$state']
function LoginController(UserService, AuthService, $state){
  var $ctrl = this;

  $ctrl.login = {}

  $ctrl.$onInit = function() {
    console.log("LoginController.$onInit");
  }

  $ctrl.authenticateUser = function () {
    console.log("LoginController.authenticateUser()");

    AuthService.login($ctrl.login);

    console.log("From LoginController -> token {}", AuthService.auth);

  };
};


})();
