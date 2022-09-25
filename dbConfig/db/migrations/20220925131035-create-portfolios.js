'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Portfolios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTicker: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Tickers",
          key: "id"
        }
      },
      idCarteira: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Carteiras",
          key: "id"
        }
      },
      valorCusto: {
        type: Sequelize.DECIMAL(10,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Portfolios');
  }
};