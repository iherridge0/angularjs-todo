(function () {
'use strict';

angular.module('Register')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService', 'AuthService', '$state']
function RegisterController(UserService, AuthService, $state){
  var $ctrl = this;

  $ctrl.newUser = {}

  $ctrl.register = function () {
    console.log("RegisterController.registering()");

    var promise = UserService.register($ctrl.newUser);

    promise.then(function (response){
      var data = response.data;
      console.log("User created -> username: " + $ctrl.newUser.username);
      $state.go('login')

    }, function (error){
      console.log("Error while creating a new user -> username: " + $ctrl.newUser.username + " already exist, please try a different username ");
    });

  };
};

})();
