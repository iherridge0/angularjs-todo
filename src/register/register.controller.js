(function () {
'use strict';

angular.module('Register')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService', 'AuthService', '$state']
function RegisterController(UserService, AuthService, $state){
  var $ctrl = this;

  $ctrl.newUser = {}
  $ctrl.$onInit = function () {
    $ctrl.errorMessage = '';
  }


  $ctrl.register = function () {
    console.log("RegisterController.registering()");

    var promise = UserService.register($ctrl.newUser);

    promise.then(function (response){
      var data = response.data;
      console.log('User created -> username: ' + $ctrl.newUser.username);
      $state.go('login')

    }, function (error){
      if(error.status == -1) {
        $ctrl.errorMessage = 'The backend is currently down, please try again later'
      } else {
        $ctrl.errorMessage = $ctrl.newUser.username + ' already exist, please try a different username.';
      }
      //console.log("Error while creating a new user -> username: " + $ctrl.newUser.username + " already exist, please try a different username ");
    });

  };
};

})();
