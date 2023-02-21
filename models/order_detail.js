'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order_detail.belongsTo(models.product);
      models.product.hasMany(order_detail);
      order_detail.belongsTo(models.order_cmd);
      models.order_cmd.hasMany(order_detail);
    }
  }
  order_detail.init({
    id_order_detail: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};