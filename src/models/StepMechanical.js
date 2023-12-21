const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StepMechanical extends Model {
    static associate(models) {
      this.belongsTo(models.Technician, { foreignKey: "id_tecnico" });
      this.belongsTo(models.Plate, { foreignKey: "id_placa" });
    }
  }

  StepMechanical.init(
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
      //etapas: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "StepMechanical",
    }
  );
  return StepMechanical;
};
