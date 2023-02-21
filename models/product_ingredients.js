'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_ingredients.belongsTo(models.product);
      models.product.hasMany(product_ingredients);
      product_ingredients.belongsTo(models.ingredients);
      models.ingredients.hasMany(product_ingredients);
    }
  }
  product_ingredients.init({
    product_num: DataTypes.INTEGER,
    ingredient_num: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_ingredients',
  });
  return product_ingredients;
};