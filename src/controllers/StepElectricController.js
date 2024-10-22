const { StepElectric } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async get(req, res) {
    try {
      let stepElectric = null;
      const { id_placa } = req.query;
      let query = {
        id_placa: {
          [Op.eq]: id_placa,
        },
      };

      stepElectric = await StepElectric.findOne({
        where: query,
      });

      res.send(stepElectric);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao buscar as etapas mecânicas!",
      });
    }
  },
  async post(req, res) {
    try {
      const stepBody = {
        id_tecnico: req.body.id_tecnico,
        id_placa: req.body.id_placa,
        status: req.body.status,
        ultima_etapa: 0,
        //etapas: req.body.etapas,
      };

      const stepElectric = await StepElectric.create(stepBody);
      res.send(stepElectric);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao criar um setor!",
      });
    }
  },
  async put(req, res) {
    try {
      await StepElectric.update(req.body, {
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
