'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('product_ingredients',{
      fields:['ingredient_num'],
      type:'foreign key',
      name:'product_ingredients_ingredients_association',
      references:{
        table:'ingredientss',
        field:'id_ingredient'
      }
  
  
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('product_ingredients',{
      fields:['ingredient_num'],
      type:'foreign key',
      name:'product_ingredients_ingredients_association',
      references:{
        table:'ingredientss',
        field:'id_ingredient'
      }
  
  
     })
  }
};
