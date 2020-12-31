(function () {
'use strict';

angular.module('Register')
.component('register', {
  templateUrl: 'src/register/register.template.html',
  controller: RegisterController
});

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
