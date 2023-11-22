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
      pregav_12_min: DataTypes.DOUBLE,
      pregav_12_max: DataTypes.DOUBLE,
      pregrav_neg12_min: DataTypes.DOUBLE,
      pregrav_neg12_max: DataTypes.DOUBLE,
      posgrav_5_min: DataTypes.DOUBLE,
      posgrav_5_max: DataTypes.DOUBLE,
      posgrav_12_min: DataTypes.DOUBLE,
      posgrav_12_max: DataTypes.DOUBLE,
      posgrav_neg12_min: DataTypes.DOUBLE,
      posgrav_neg12_max: DataTypes.DOUBLE,
      trim_rv1_min: DataTypes.DOUBLE,
      trim_rv1_max: DataTypes.DOUBLE,
      trim_rv2_min: DataTypes.DOUBLE,
      trim_rv2_max: DataTypes.DOUBLE,
      trim_rv3_min: DataTypes.DOUBLE,
      trim_rv3_max: DataTypes.DOUBLE,
      trim_rv4_min: DataTypes.DOUBLE,
      trim_rv4_max: DataTypes.DOUBLE,
      trim_rv5_min: DataTypes.DOUBLE,
      trim_rv5_max: DataTypes.DOUBLE,
      trim_rv6_min: DataTypes.DOUBLE,
      trim_rv6_max: DataTypes.DOUBLE,
      trim_rv7_min: DataTypes.DOUBLE,
      trim_rv7_max: DataTypes.DOUBLE,
      trim_rv8_min: DataTypes.DOUBLE,
      trim_rv8_max: DataTypes.DOUBLE,
      trim_rv9_min: DataTypes.DOUBLE,
      trim_rv9_max: DataTypes.DOUBLE,
      trim_rv10_min: DataTypes.DOUBLE,
      trim_rv10_max: DataTypes.DOUBLE,
      osc_5_min: DataTypes.DOUBLE,
      osc_5_max: DataTypes.DOUBLE,
      osc_gnd_min: DataTypes.DOUBLE,
      osc_gnd_max: DataTypes.DOUBLE,
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
