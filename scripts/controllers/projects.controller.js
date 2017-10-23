myApp.controller('ProjectController', ['$mdDialog', '$mdSidenav', '$location', function ($mdDialog, $mdSidenav, $location) {
    console.log('StudentController Loaded');

    var vm = this;

    vm.showDialog = function ($event) {
        console.log('$event:', $event);
        // vm.currentSpecimenQuestions (assign questions based on species element clicked)
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'sc',
            templateUrl: 'we-grocery.html',
            clickOutsideToClose: true
        })
    }
    vm.showBelwin = function ($event) {
        console.log('$event:', $event);
        // vm.currentSpecimenQuestions (assign questions based on species element clicked)
        $mdDialog.show({
            targetEvent: $event,
            controller: 'ProjectController',
            controllerAs: 'sc',
            templateUrl: 'belwin.html',
            clickOutsideToClose: true
        })
    }
}]);