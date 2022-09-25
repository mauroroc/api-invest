'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
     await queryInterface.bulkInsert('portfolios', [
        {          
          idTicker: "1",
          idCarteira: "1",
          valorCusto: 20.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {          
          idTicker: "2",
          idCarteira: "1",
          valorCusto: 23.2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {          
          idTicker: "3",
          idCarteira: "1",
          valorCusto: 29,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {          
          idTicker: "3",
          idCarteira: "2",
          valorCusto: 33.4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {          
          idTicker: "4",
          idCarteira: "2",
          valorCusto: 75.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
