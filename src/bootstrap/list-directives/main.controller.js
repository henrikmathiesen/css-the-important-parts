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
}

angular
    .module('main')
    .controller('mainController', mainController);
