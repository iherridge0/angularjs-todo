(function () {
'use strict';

angular.module('Register')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService', '$state']
function RegisterController(UserService, $state){
  var $ctrl = this;

  $ctrl.newUser = {}

  $ctrl.register = function () {
    console.log("registering");
    UserService.createUser($ctrl.newUser);
    $state.go('todo-list')
  };
};

})();
