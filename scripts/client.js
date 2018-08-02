var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
 
    }).when('/projects', {
      templateUrl: 'projects.html',  
      controller: 'ProjectController as pc',
      
    }).when('/deadpool-phase1', {
        templateUrl: 'deadpool-phase1.html',

    }).when('/deadpool-phase2', {
        templateUrl: 'deadpool-phase2.html',

    }).when('/deadpool-phase3', {
        templateUrl: 'deadpool-phase3.html',
      
    }).when('/contact', {
        templateUrl: 'contact.html',
      });
});

