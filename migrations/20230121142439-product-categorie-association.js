'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.addConstraint('product',{
    fields:['id_categorie'],
    type:'foreign key',
    name:'product_categorie_association',
    references:{
      table:'categories',
      field:'id_categorie'
    }


   })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('product',{
      fields:['id_categorie'],
      type:'foreign key',
      name:'product_categorie_association',
      references:{
        table:'categories',
        field:'id_categorie'
      }
  
  
     })
  }
};
