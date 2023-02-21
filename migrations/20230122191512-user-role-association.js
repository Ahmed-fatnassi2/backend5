'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('user',{
      fields:['id_role'],
      type:'foreign key',
      name:'user_role_association',
      references:{
        table:'roles',
        field:'id_role'
      }
  
  
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('user',{
      fields:['id_role'],
      type:'foreign key',
      name:'user_role_association',
      references:{
        table:'roles',
        field:'id_role'
      }
  
  
     })
  }
};
