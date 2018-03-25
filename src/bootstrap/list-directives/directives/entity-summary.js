function entitySummary() {
    return {
        restrict: 'E',
        scope: {
            entity: '=',
            single: '=?'
        },
        templateUrl: 'directives/entity-summary.html',
        link: function (scope) {

            scope.getLabelTruncated = function (label) {
                var wordCap = 4;
                var words = label.split(' ');

                if (words.length <= wordCap) {
                    return label;
                }

                words = words.slice(0, wordCap);
                words = words.join(' ');
                words += ' ...';

                return words;
            };

        }
    };
}

angular
    .module('main')
    .directive('entitySummary', entitySummary);
