'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Portfolios.belongsTo(models.Tickers, {
        foreignKey: "idTicker"
      })

      Portfolios.belongsTo(models.Carteiras, {
        foreignKey: "idCarteira"
      })
    }
  }
  Portfolios.init({
    valorCusto: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Portfolios',
  });
  return Portfolios;
};