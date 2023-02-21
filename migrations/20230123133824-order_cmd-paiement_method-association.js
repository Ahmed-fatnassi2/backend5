'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('order_cmd',{
      fields:['means_paiement'],
      type:'foreign key',
      name:'order_cmd_paiement_method_association',
      references:{
        table:'paiement_methods',
        field:'id_paiement_methods'
      }
  
  
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('order_cmd',{
      fields:['means_paiement'],
      type:'foreign key',
      name:'order_cmd_paiement_method_association',
      references:{
        table:'paiement_methods',
        field:'id_paiement_methods'
      }
  
  
     })
  }
};
