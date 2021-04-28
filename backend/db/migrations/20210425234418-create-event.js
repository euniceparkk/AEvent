'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      host: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Categories" }
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT(255)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.STRING(50)
      },
      state: {
        type: Sequelize.STRING(50)
      },
      dateAndTime: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      totalTickets: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ticketPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};