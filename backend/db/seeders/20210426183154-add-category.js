'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { category: 'Music' },
      { category: 'Food&Drink' },
      { category: 'Festivals' },
      { category: 'Arts&Theater' },
      { category: 'Family' },
      { category: "Mother's Day" },
      { category: 'Online' },
      { category: 'Free' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
