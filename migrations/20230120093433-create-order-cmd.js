 'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_cmds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order: {
        type: Sequelize.INTEGER
      },
      // total_paiement: {
      //   type: Sequelize.STRING
      // },
      // means_paiement: {
      //   type: Sequelize.STRING
      // },
      // command_id: {
      //   type: Sequelize.INTEGER},
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
    await queryInterface.dropTable('order_cmds');
  }
};