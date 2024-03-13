"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Technician extends Model {
    static associate(models) {
      this.belongsTo(models.Sector, { foreignKey: "id_setor" });
      this.hasMany(models.StepMechanical, { foreignKey: "id_tecnico" });
      this.hasMany(models.StepElectronic, { foreignKey: "id_tecnico" });
      this.hasMany(models.StepElectric, { foreignKey: "id_tecnico" });
      this.hasMany(models.StepQuality, { foreignKey: "id_tecnico" });
      this.hasMany(models.StepPacking, { foreignKey: "id_tecnico" });
    }
  }

  Technician.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING,
      id_setor: {
        type: DataTypes.INTEGER,
        references: {
          model: "Sectors",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Technician",
    }
  );
  return Technician;
};
