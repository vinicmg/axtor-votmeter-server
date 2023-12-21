"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Plate extends Model {
    static associate(models) {
      this.belongsTo(models.TypePlate, { foreignKey: "id_tp_placa" });
      this.belongsTo(models.Config, { foreignKey: "id_config" });
      this.hasOne(models.StepMechanical, { foreignKey: "id_placa" });
      this.hasOne(models.StepElectronic, { foreignKey: "id_placa" });
      this.hasOne(models.StepElectric, { foreignKey: "id_placa" });
      this.hasOne(models.StepQuality, { foreignKey: "id_placa" });
      this.hasOne(models.StepPacking, { foreignKey: "id_placa" });
    }
  }

  Plate.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_tp_placa: {
        type: DataTypes.INTEGER,
        references: {
          model: "TypePlates",
          key: "id",
        },
      },
      id_config: {
        type: DataTypes.INTEGER,
        references: {
          model: "Configs",
          key: "id",
        },
      },
      nome: DataTypes.STRING,
      num_serie: DataTypes.STRING,
      status: DataTypes.INTEGER,
      tecnicos_setores: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Plate",
    }
  );
  return Plate;
};
