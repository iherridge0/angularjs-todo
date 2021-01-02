(function () {
'use strict';

angular.module('TodoList')
.controller('TodoListController', TodoListController);

TodoListController.$inject = ['UserService', 'AuthService', '$state']
function TodoListController(UserService, AuthService, $state){
  var $ctrl = this;

  $ctrl.todoList = {}

  $ctrl.$onInit = function() {
    console.log("TodoListController.$onInit");
    console.log("From TodoListController -> token {}", AuthService.auth);
    if(!AuthService.isAuthenticated()) {
      $state.go('login');
    }
  }

};


})();
