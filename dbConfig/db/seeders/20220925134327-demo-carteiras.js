'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *    */
    await queryInterface.bulkInsert('carteiras', [
        {          
          nome: "Smallcaps",
          corretora: "Nord",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {          
          nome: "Blue Chips",
          corretora: "XP",
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
