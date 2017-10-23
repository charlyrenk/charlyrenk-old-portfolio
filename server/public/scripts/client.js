var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/home.html',
 
    }).when('/projects', {
      templateUrl: '/views/templates/projects.html',
     
    }).when('/contact', {
        templateUrl: '/views/templates/contact.html',
    
      });
});

