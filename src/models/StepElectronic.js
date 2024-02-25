const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StepElectronic extends Model {
    static associate(models) {
      this.belongsTo(models.Technician, { foreignKey: "id_tecnico" });
      this.belongsTo(models.Plate, { foreignKey: "id_placa" });
    }
  }

  StepElectronic.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_tecnico: {
        type: DataTypes.INTEGER,
        references: {
          model: "Technicians",
          key: "id",
        },
      },
      id_placa: {
        type: DataTypes.INTEGER,
        references: {
          model: "Plates",
          key: "id",
        },
      },
      status: DataTypes.INTEGER,
      ultima_etapa: DataTypes.INTEGER,
      dados: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "StepElectronic",
    }
  );
  return StepElectronic;
};
