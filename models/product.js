'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    
    static associate(models) {
     product.belongsTo(models.categorie);
     models.categorie.hasMany(product);
    }
  }
  product.init({
    id_product: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};