myApp.controller('ProjectController', ['$mdDialog', function ($mdDialog) {
    console.log('ProjectController Loaded');

    var vm = this;

    vm.cancel = function() {
        $mdDialog.cancel();
    };
    
    vm.showWeGrocery = function ($event) {
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'pc',
            templateUrl: 'we-grocery.html',
            clickOutsideToClose: true
        });
    }
    vm.showBelwin = function ($event) {
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'pc',
            templateUrl: 'belwin.html',
            clickOutsideToClose: true
        })
    }
    vm.showDeadpool = function ($event) {
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'pc',
            templateUrl: 'deadpool.html',
            clickOutsideToClose: true
        })
    }
    vm.showBbpEmail = function ($event) {
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'pc',
            templateUrl: 'bbp-emails.html',
            clickOutsideToClose: true
        })
    }
    
}]);