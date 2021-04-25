'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    dateAndTime: DataTypes.STRING,
    totalTickets: DataTypes.INTEGER,
    ticketPrice: DataTypes.DECIMAL
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};