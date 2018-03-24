function entitySummary() {

    return {
        restrict: 'E',
        scope: {
            entities: '=?',
            parentEntity: '=?',
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

            if (!scope.entities) {
                // make ajax call with
                console.log(scope.parentEntity.id);
                scope.entities = [
                    {
                        id: 1,
                        type: 'Fastighet',
                        benamning: 'Lorem ipsum dolores es sitamet',
                        status: 'Aktiv',
                        geo: true
                    },
                    {
                        id: 2,
                        type: 'Fastighet',
                        benamning: 'Lorem ipsum dolores es sitamet',
                        status: 'Aktiv',
                        geo: true
                    },
                ]
            }

        }
    };

}

angular
    .module('main')
    .directive('entitySummary', entitySummary);
