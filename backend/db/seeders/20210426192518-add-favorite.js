'use strict';

const { favoritesData } = require('../../seed-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const startingFavorites = favoritesData;

    return queryInterface.bulkInsert('Favorites', startingFavorites, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Favorites', null, {});
  }
};
