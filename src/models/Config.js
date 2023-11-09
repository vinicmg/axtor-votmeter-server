'use strict'
const {
    Model, DataTypes
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Config extends Model {
        static associate(models) {
            this.hasMany(models.Config, { foreignKey: 'id_config' })        
        }
    }

    Config.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
        pregrav_5: DataTypes.DOUBLE,
        pregav_12: DataTypes.DOUBLE,
        pregrav_neg12: DataTypes.DOUBLE,
        posgrav_5: DataTypes.DOUBLE,
        posgrav_12: DataTypes.DOUBLE,
        posgrav_neg12: DataTypes.DOUBLE,
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
        osc_5: DataTypes.DOUBLE,
        osc_gnd: DataTypes.DOUBLE,
        osc_12: DataTypes.DOUBLE,
        osc_neg12: DataTypes.DOUBLE,
        osc_vref: DataTypes.DOUBLE,
        osc_1khz: DataTypes.DOUBLE,
        osc_100hz: DataTypes.DOUBLE,
        osc_10khz: DataTypes.DOUBLE,
        dt_criacao: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Config'
    });
    return Config;
}