(function () {
'use strict';

angular.module('Register')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService', 'AuthService', '$state']
function RegisterController(UserService, AuthService, $state){
  var $ctrl = this;

  $ctrl.newUser = {}

  $ctrl.register = function () {
    console.log("registering");

    UserService.register($ctrl.newUser);

    


    $state.go('todo-list');
  };
};

})();
