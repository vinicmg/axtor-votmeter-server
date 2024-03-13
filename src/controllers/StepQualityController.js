const { StepQuality } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async get(req, res) {
    try {
      let stepQuality = null;
      const { id_placa } = req.query;
      let query = {
        id_placa: {
          [Op.eq]: id_placa,
        },
      };

      stepQuality = await StepQuality.findOne({
        where: query,
      });

      res.send(stepQuality);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao buscar as etapas de qualidade!",
      });
    }
  },
  async post(req, res) {
    try {
      const stepBody = {
        id_tecnico: req.body.id_tecnico,
        id_placa: req.body.id_placa,
        status: req.body.status,
        dados: req.body.dados,
      };

      const stepQuality = await StepQuality.create(stepBody);
      res.send(stepQuality);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao criar etapa de qualidade!",
      });
    }
  },
  async put(req, res) {
    try {
      await StepQuality.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Um erro ocorreu ao tentar editar o setor!",
      });
    }
  },
};
