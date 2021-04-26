'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Event, { foreignKey: 'categoryId' })
  };
  return Category;
};