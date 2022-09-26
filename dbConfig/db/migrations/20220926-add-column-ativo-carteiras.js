'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Carteiras", "ativo", {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Carteiras');
  }
};