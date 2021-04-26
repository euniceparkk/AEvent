'use strict';

const { eventsData } = require('../../seed-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const startingEvents = eventsData;

    return queryInterface.bulkInsert('Events', startingEvents, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
