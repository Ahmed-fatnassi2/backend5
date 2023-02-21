'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('order_detail',{
      fields:['order_num'],
      type:'foreign key',
      name:'order_detail_order_cmd_association',
      references:{
        table:'order_cmds',
        field:'id_order_cmd'
      }
  
  
     })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('order_detail',{
      fields:['order_num'],
      type:'foreign key',
      name:'order_detail_order_cmd_association',
      references:{
        table:'order_cmds',
        field:'id_order_cmd'
      }
  
  
     })
  }
};
