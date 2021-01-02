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

    var promise = AuthService.login($ctrl.login);

    promise.then(function (response){
      var data = response.data;
      AuthService.auth.token = data.token;
      console.log(response);
      $state.go('todo-list')
    }, function (error){
      console.log(error)
      $state.go('login')
    });

  };
};


})();
