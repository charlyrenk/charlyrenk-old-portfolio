var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/home.html',
      controller: 'UserController as uc',
    }).when('/repos', {
      templateUrl: '/views/templates/projects.html',
      controller: 'UserController as uc'
    }).when('/contact', {
        templateUrl: '/views/templates/contact.html',
        controller: 'UserController as uc'
      });
});

