'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    host: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Categories" }
    },
    image: {
      type: DataTypes.TEXT(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
    },
    state: {
      type: DataTypes.STRING(50),
    },
    dateAndTime: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    totalTickets: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ticketPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
  }, {});
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Event.hasMany(models.Ticket, { foreignKey: 'eventId' });
    // Event.belongsTo(models.User, { foreignKey: 'userHostId' });

    Event.belongsToMany(models.User, {
      through: 'Ticket',
      otherKey: 'userId',
      foreignKey: 'eventId',
    });
  };
  return Event;
};