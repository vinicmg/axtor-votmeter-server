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
      fp_5_min: DataTypes.DOUBLE,
      fp_5_max: DataTypes.DOUBLE,
      fp_12_min: DataTypes.DOUBLE,
      fp_12_max: DataTypes.DOUBLE,
      fp_neg12_min: DataTypes.DOUBLE,
      fp_neg12_max: DataTypes.DOUBLE,
      osc_1khz_min: DataTypes.DOUBLE,
      osc_1khz_duty_min: DataTypes.DOUBLE,
      osc_1khz_max: DataTypes.DOUBLE,
      osc_1khz_duty_max: DataTypes.DOUBLE,
      osc_100hz_min: DataTypes.DOUBLE,
      osc_100hz_duty_min: DataTypes.DOUBLE,
      osc_100hz_max: DataTypes.DOUBLE,
      osc_100hz_duty_max: DataTypes.DOUBLE,
      osc_10khz_min: DataTypes.DOUBLE,
      osc_10khz_duty_min: DataTypes.DOUBLE,
      osc_10khz_max: DataTypes.DOUBLE,
      osc_10khz_duty_max: DataTypes.DOUBLE,
      capacitancia_min: DataTypes.DOUBLE,
      capacitancia_max: DataTypes.DOUBLE,
      sens_corrent_min: DataTypes.DOUBLE,
      sens_corrent_max: DataTypes.DOUBLE,
      indutancia_min: DataTypes.DOUBLE,
      indutancia_max: DataTypes.DOUBLE,
      corr_atracad12_min: DataTypes.DOUBLE,
      corr_atracad12_max: DataTypes.DOUBLE,
      offset_cabos_min: DataTypes.DOUBLE,
      offset_cabos_max: DataTypes.DOUBLE,
      corr_atracad13a_min: DataTypes.DOUBLE,
      corr_atracad13a_max: DataTypes.DOUBLE,
      corr_atracad13b_min: DataTypes.DOUBLE,
      corr_atracad13b_max: DataTypes.DOUBLE,
      pwm_pulsador_min: DataTypes.DOUBLE,
      pwm_pulsador_max: DataTypes.DOUBLE,
      pwm_vedacao_min: DataTypes.DOUBLE,
      pwm_vedacao_max: DataTypes.DOUBLE,
      res_carcaca_min: DataTypes.DOUBLE,
      res_carcaca_max: DataTypes.DOUBLE,
      res_hv_min: DataTypes.DOUBLE,
      res_hv_max: DataTypes.DOUBLE,
      fb_duty_min: DataTypes.DOUBLE,
      fb_duty_max: DataTypes.DOUBLE,
      fb_tensao_min: DataTypes.DOUBLE,
      fb_tensao_max: DataTypes.DOUBLE,
      tb_linear: DataTypes.DOUBLE,
      tb_proporcional: DataTypes.DOUBLE,
      res_hv_megometro: DataTypes.DOUBLE,
      offset_megometro: DataTypes.DOUBLE,
      res_megometro: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Config",
    }
  );
  return Config;
};
