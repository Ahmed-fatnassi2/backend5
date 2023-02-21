'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_cmd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_cmd.belongsTo(models.paiement_method);
     models.paiement_method.hasMany(order_cmd)
     ;
    }
  }
  order_cmd.init({
    id_order_cmd: DataTypes.INTEGER,
    // total_paiement: DataTypes.FLOAT
    // command_id: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'order_cmd',
  });
  return order_cmd;
};