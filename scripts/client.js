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
      
     
    }).when('/contact', {
        templateUrl: 'contact.html',
    
      });
});

