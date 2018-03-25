function entitySummaries() {

    return {
        restrict: 'E',
        scope: {
            entities: '=?',
            single: '=?',
            parentEntity: '=?',
            subEntityName: '@?'
        },
        templateUrl: 'directives/entity-summaries.html',
        link: function (scope) {

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
    .directive('entitySummaries', entitySummaries);
