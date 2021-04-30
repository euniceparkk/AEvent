'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Events" }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
  }, {});
  Favorite.associate = function (models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, { foreignKey: 'userId' })
    Favorite.belongsTo(models.Event, { foreignKey: 'eventId' })
  };
  return Favorite;
};