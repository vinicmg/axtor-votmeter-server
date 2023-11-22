'use strict'
const {
    Model, DataTypes
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class TypePlate extends Model {
        static associate(models) {
            this.hasMany(models.Plate, { foreignKey: 'id_tp_placa' })
        }
    }

    TypePlate.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
        modelo: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'TypePlate'
    });
    return TypePlate;
}