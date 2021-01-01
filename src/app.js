(function (){
'use strict';

angular.module('ToDoApp', ['ui.router','Register', 'Login']);

angular.module('ToDoApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/login');

  // Set up UI states
  $stateProvider
    .state('register', {
      url: '/register',
      template: '<register></register>'
    })

    .state('login', {
      url: '/login',
      template: '<login></login>'
    });
}

})();
