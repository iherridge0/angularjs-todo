(function () {
'use strict';

angular.module('Login')
.controller('LoginController', LoginController);

LoginController.$inject = ['UserService']
function LoginController(UserService){
  var $ctrl = this;

  $ctrl.login = {}

  $ctrl.authenticateUser = function () {
    console.log("logging in");
    
  };
};


})();
