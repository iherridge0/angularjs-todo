(function () {
'use strict';

angular.module('Login')
.component('login', {
  templateUrl: 'src/login/login.template.html',
  controller: LoginController
});
 
LoginController.$inject = ['UserService']
function LoginController(UserService){
  var $ctrl = this;

  $ctrl.login = {}

  $ctrl.authenticateUser = function () {
    console.log("logging in");
    //UserService.createUser($ctrl.newUser);
  };
};

})();
