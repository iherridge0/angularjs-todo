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
      //AuthService.auth.token = data.token;
      console.log(response);
    //  $state.go('todo-list')
    }, function (error){
      console.log(error)
      //$state.go('login')
    });




    //$state.go('todo-list');
  };
};

})();
