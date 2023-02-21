'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('product_ingredients',{
      fields:['product_num'],
      type:'foreign key',
      name:'product_ingredients_product_association',
      references:{
        table:'products',
        field:'id_product'
      }
  
  
     })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
