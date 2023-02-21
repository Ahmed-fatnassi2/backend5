'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paiement_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paiement_method.init({
    id_paiemant_method: DataTypes.INTEGER,
    name_meth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paiement_method',
  });
  return paiement_method;
};