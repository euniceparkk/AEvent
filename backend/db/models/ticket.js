'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Ticket.associate = function (models) {
    // associations can be defined here
    Ticket.belongsTo(models.Event, { foreignKey: 'eventId' });
    Ticket.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Ticket;
};