'use strict';

const { ticketsData } = require('../../seed-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const startingTickets = ticketsData;

    return queryInterface.bulkInsert('Tickets', startingTickets, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
