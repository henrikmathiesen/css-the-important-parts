function accordian() { 

    return {
        restrict: 'E',
        scope: {
            entities: '='
        },
        templateUrl: 'directives/accordian.html'
    };

};

angular
    .module('main')
    .directive('accordian', accordian);
