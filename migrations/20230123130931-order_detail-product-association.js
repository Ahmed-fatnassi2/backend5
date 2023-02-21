'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('order_detail',{
      fields:['product_num'],
      type:'foreign key',
      name:'order_detail_product_association',
      references:{
        table:'products',
        field:'id_product'
      }
  
  
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('order_detail',{
      fields:['product_num'],
      type:'foreign key',
      name:'order_detail_product_association',
      references:{
        table:'products',
        field:'id_product'
      }
  
  
     })
  }
};
