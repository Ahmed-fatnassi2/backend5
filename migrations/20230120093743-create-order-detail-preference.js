'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_detail_preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order_pr: {
        type: Sequelize.INTEGER
      },
      ingredient_for_change: {
        type: Sequelize.STRING
      },
      qt_ig: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      order_num:{
        type: Sequelize.INTEGER
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_detail_preferences');
  }
};