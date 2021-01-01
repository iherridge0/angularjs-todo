(function (){
'use strict';

angular.module('ToDoApp')
.service('AuthService', AuthService);

AuthService.$inject = ['$http']
function AuthService($http) {
  var service = this;

  service.auth = {};

  service.$onInit = function () {
    console.log("AuthService started!");

    console.log("Checking if user is logged in...");
    console.log("service.auth {}", service.auth);

  }

  service.authenticate = function (){
    console.log("authenticating user");
  }

  service.isAuthenticated = function () {
    return false;
  }

  // service.createUser = function(newUser){
  //   var encryptedPassword = window.btoa(`${newUser.username}:${newUser.password}`);
  //   newUser.password = encryptedPassword;
  //   var response = $http({
  //     method: "POST",
  //     url: "http://localhost:8080/jpa/users",
  //     data: newUser
  //   }).then(
  //     function success(response){
  //       console.log("User Created! User -> {}", response);
  //       //do something
  //     }
  //   )
  // }

  ///POST jpa/users
}

})();
