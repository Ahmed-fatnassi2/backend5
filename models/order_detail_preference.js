'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail_preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order_detail_preference.belongsTo(models.order_detail);
      models.order_detail.hasMany(order_detail_preference);
    }
  }
  order_detail_preference.init({
    id_order_pr: DataTypes.INTEGER,
    ingredient_for_change: DataTypes.STRING,
    qt_ig: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order_detail_preference',
  });
  return order_detail_preference;
};