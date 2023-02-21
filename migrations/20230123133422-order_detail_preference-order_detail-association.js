'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('order_detail_preference',{
      fields:['order_num'],
      type:'foreign key',
      name:'order_detail_preference_order_detail_association',
      references:{
        table:'order_details',
        field:'id_order_detail'
      }
  
  
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('order_detail_preference',{
      fields:['order_num'],
      type:'foreign key',
      name:'order_detail_preference_order_detail_association',
      references:{
        table:'order_details',
        field:'id_order_detail'
      }
  
  
     })
  }
};
