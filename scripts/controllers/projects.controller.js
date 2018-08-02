myApp.controller('ProjectController', ['$mdDialog', '$mdSidenav', '$location', function ($mdDialog, $mdSidenav, $location) {
    console.log('StudentController Loaded');

    var vm = this;

    vm.showDialog = function ($event) {
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'sc',
            templateUrl: 'we-grocery.html',
            clickOutsideToClose: true
        })
    }
    vm.showBelwin = function ($event) {
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'sc',
            templateUrl: 'belwin.html',
            clickOutsideToClose: true
        })
    }
    vm.showDeadpool = function ($event) {
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'sc',
            templateUrl: 'deadpool.html',
            clickOutsideToClose: true
        })
    }
}]);