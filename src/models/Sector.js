"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Sector extends Model {
    static associate(models) {
      this.hasMany(models.Technician, { foreignKey: "id_setor" });
    }
  }

  Sector.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sector",
    }
  );
  return Sector;
};
