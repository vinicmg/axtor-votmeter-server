"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    static associate(models) {
      this.hasMany(models.Plate, { foreignKey: "id_config" });
      this.hasMany(models.Report, { foreignKey: "id_config" });
    }
  }

  Config.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING,
      pregrav_5_min: DataTypes.DOUBLE,
      pregrav_5_max: DataTypes.DOUBLE,
      pregrav_12_min: DataTypes.DOUBLE,
      pregrav_12_max: DataTypes.DOUBLE,
      pregrav_neg12_min: DataTypes.DOUBLE,
      pregrav_neg12_max: DataTypes.DOUBLE,
      posgrav_5_min: DataTypes.DOUBLE,
      posgrav_5_max: DataTypes.DOUBLE,
      posgrav_12_min: DataTypes.DOUBLE,
      posgrav_12_max: DataTypes.DOUBLE,
      posgrav_neg12_min: DataTypes.DOUBLE,
      posgrav_neg12_max: DataTypes.DOUBLE,
      trim_rv1: DataTypes.DOUBLE,
      trim_rv2: DataTypes.DOUBLE,
      trim_rv3: DataTypes.DOUBLE,
      trim_rv4: DataTypes.DOUBLE,
      trim_rv5: DataTypes.DOUBLE,
      trim_rv6: DataTypes.DOUBLE,
      trim_rv7: DataTypes.DOUBLE,
      trim_rv8: DataTypes.DOUBLE,
      trim_rv9: DataTypes.DOUBLE,
      trim_rv10: DataTypes.DOUBLE,
      osc_5_min: DataTypes.DOUBLE,
      osc_5_max: DataTypes.DOUBLE,
      osc_12_min: DataTypes.DOUBLE,
      osc_12_max: DataTypes.DOUBLE,
      osc_neg12_min: DataTypes.DOUBLE,
      osc_neg12_max: DataTypes.DOUBLE,
      osc_vref_min: DataTypes.DOUBLE,
      osc_vref_max: DataTypes.DOUBLE,
      osc_1khz_min: DataTypes.DOUBLE,
      osc_1khz_max: DataTypes.DOUBLE,
      osc_100hz_min: DataTypes.DOUBLE,
      osc_100hz_max: DataTypes.DOUBLE,
      osc_10khz_min: DataTypes.DOUBLE,
      osc_10khz_max: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Config",
    }
  );
  return Config;
};
