(function (){
'use strict';

angular.module('ToDoApp')
.service('UserService', UserService);

UserService.$inject = ['$http']
function UserService($http) {
  var service = this;

  console.log("UserService is up and running");

  service.createUser = function(newUser){
    var encryptedPassword = window.btoa(`${newUser.username}:${newUser.password}`);
    newUser.password = encryptedPassword;
    var response = $http({
      method: "POST",
      url: "http://localhost:8080/jpa/users",
      data: newUser
    }).then(
      function success(response){
        console.log("User Created! User -> {}", response);
        //do something
      }
    )
  }

  ///POST jpa/users
}

})();
