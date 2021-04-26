'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tickets = sequelize.define('Tickets', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Tickets.associate = function(models) {
    // associations can be defined here
  };
  return Tickets;
};