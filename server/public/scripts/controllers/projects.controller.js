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
            templateUrl: './views/templates/we-grocery.html',
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
            templateUrl: './views/templates/belwin.html',
            clickOutsideToClose: true
        })
    }
}]);