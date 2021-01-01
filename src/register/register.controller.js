(function () {
'use strict';

angular.module('Register')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService']
function RegisterController(UserService){
  var $ctrl = this;

  $ctrl.newUser = {}

  $ctrl.register = function () {
    console.log("registering");
    UserService.createUser($ctrl.newUser);
  };
};

})();
