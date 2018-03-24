function mainController() {

    var mainCtrl = this;

    mainCtrl.fastighet = {
        id: 1,
        type: 'Fastighet',
        benamning: 'Lorem ipsum dolores es sitamet',
        status: 'Aktiv',
        geo: true
    };

    mainCtrl.fastigheter = [
        {
            id: 10,
            type: 'Fastighet',
            benamning: 'Lorem ipsum dolores es sitamet',
            status: 'Avyttrad/Avverkad',
            geo: true
        },
        {
            id: 11,
            type: 'Fastighet',
            benamning: 'Flygande bäckasiner söker whila på mjuka tuvor. En riktigt riktigt rackans lång benämning.',
            status: 'Ruin',
            geo: true
        },
        {
            id: 12,
            type: 'Fastighet',
            benamning: 'Ipsum parum',
            status: 'Planerad',
            geo: true
        },
        {
            id: 13,
            type: 'Fastighet',
            benamning: 'Det var en gång',
            status: 'Ägd',
            geo: true
        },
        {
            id: 14,
            type: 'Fastighet',
            benamning: 'Storboden 11:3',
            status: 'Aktiv',
            geo: false
        }
    ];

    mainCtrl.fastigheterOmAndelar = [
        {
            andel: 50,
            fastighet: mainCtrl.fastigheter[0]
        },
        {
            andel: 30,
            fastighet: mainCtrl.fastigheter[1]
        },
        {
            andel: 20,
            fastighet: mainCtrl.fastigheter[2]
        },
    ];

    mainCtrl.fastigheterWithInfo = mainCtrl.fastigheterOmAndelar.map((fastAndAndel) => {
        // An array with a custom made object, entity-summary directive needs to have an interface matching this (if using TypeScript)
        return Object.assign({}, {info: fastAndAndel.andel.toString() + '%' }, fastAndAndel.fastighet);
    });

}

angular
    .module('main')
    .controller('mainController', mainController);
