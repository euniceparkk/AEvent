'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { category: 'Today' },
      { category: 'This weekend' },
      { category: "Mother's Day" },
      { category: 'Free' },
      { category: 'Music' },
      { category: 'Festivals' },
      { category: 'Food&Drink' },
      { category: 'Online' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
