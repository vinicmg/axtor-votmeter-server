'use strict';
const {
    Model, DataTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Technician extends Model {
        static associate(models) {
            this.belongsTo(models.Sector, { foreignKey: 'id_sector' })
            this.hasMany(models.Plate, { foreignKey: 'id_tecnico' })
        }
    }
    
    Technician.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
        id_setor: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Sectors',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Technician',
      });
      return Technician;
};