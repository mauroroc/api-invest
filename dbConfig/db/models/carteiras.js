'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carteiras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carteiras.hasMany(models.Portfolios, {
        foreignKey: "idCarteira"
      })
    }
  }
  Carteiras.init({
    nome: DataTypes.STRING,
    corretora: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Carteiras',
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
    scopes: {
      inativo: {
        where: {
          ativo: false
        }
      }
    }
  });
  return Carteiras;
};