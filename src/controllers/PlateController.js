const {
  Plate,
  StepElectric,
  StepElectronic,
  StepQuality,
  StepMechanical,
  StepPacking,
} = require("../models");
const { Op } = require("sequelize");

module.exports = {
  // Get: Buscar os valores para exibição em tela
  async get(req, res) {
    try {
      let plate = null;
      const { id, nome, createdAt, status } = req.query;
      let query = {};

      if (id != null) {
        query.id = {
          [Op.eq]: id,
        };
      }

      if (nome != null) {
        query.nome = {
          [Op.iLike]: `%${nome}%`,
        };
      }

      if (createdAt != null) {
        query.createdAt = {
          [Op.gt]: createdAt,
        };
      }

      if (status != null) {
        query.status = {
          [Op.eq]: status,
        };
      }

      if (id || nome || createdAt || status) {
        plate = await Plate.findAll({
          include: [
            {
              model: StepElectric,
            },
            {
              model: StepElectronic,
            },
            {
              model: StepMechanical,
            },
            {
              model: StepQuality,
            },
            {
              model: StepPacking,
            },
          ],
          where: query,
          order: [["updatedAt", "DESC"]],
        });
      } else {
        plate = await Plate.findAll({
          include: [
            {
              model: StepElectric,
            },
            {
              model: StepElectronic,
            },
            {
              model: StepMechanical,
            },
            {
              model: StepQuality,
            },
            {
              model: StepPacking,
            },
          ],
          order: [["updatedAt", "DESC"]],
          limit: 50,
        });
      }
      res.send(plate);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao buscar os equipamentos!",
      });
    }
  },
  // Post: Criar uma placa
  async post(req, res) {
    try {
      const plateBody = {
        nome: req.body.nome,
        num_serie: req.body.num_serie,
        status: req.body.status,
        id_tp_placa: req.body.id_tp_placa,
        id_config: req.body.id_config,
        tecnicos_setores: req.body.tecnicos_setores,
        arquivo: req.body.arquivo,
      };

      const plate = await Plate.create(plateBody);
      res.send(plate);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao criar uma placa!",
      });
    }
  },
  // Delete: Deletar um registro de placa
  async delete(req, res) {
    try {
      const plate = await Plate.destroy({
        where: {
          id: req.params.id,
        },
      }).then((num) => {
        if (num == 1) {
          res.send({
            message: "Placa deletada com sucesso!",
          });
        } else {
          res.send({
            message: "Não foi possível deletar a placa!",
          });
        }
      });
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao tentar deletar a placa!",
      });
    }
  },
  // Put: Editar um registro de placa
  async put(req, res) {
    try {
      await Plate.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.send(req.body);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "Um erro ocorreu ao tentar editar a placa!",
      });
    }
  },
};
