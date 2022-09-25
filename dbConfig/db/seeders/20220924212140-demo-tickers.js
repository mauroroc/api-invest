'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:   */
     await queryInterface.bulkInsert('tickers', [
      {
        codigo: "PRIO3",
        valorCusto: 25.8,
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        codigo: "TASA4",
        valorCusto: 20.2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        codigo: "PETR4",
        valorCusto: 30.9,
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        codigo: "VALE3",
        valorCusto: 70.1,
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
