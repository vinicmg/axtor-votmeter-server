const { Plate } = require("../models");

module.exports = {
  // Get: Buscar os valores para exibição em tela
  async get(req, res) {
    try {
      let plate = null;
      const search = req.query.search;
      if (search) {
        plate = await Plate.findAll({
          where: {
            $or: ["nome"].map((key) => ({
              [key]: {
                $like: `%${search}%`,
              },
            })),
          },
        });
      } else {
        plate = await Plate.findAll({
          limit: 50,
        });
      }
      res.send(plate);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao buscar as placas!",
      });
    }
  },
  // Post: Criar uma placa
  async post(req, res) {
    try {
      const plateBody = {
        nome: req.body.nome,
        id_tp_placa: req.body.id_tp_placa,
        id_config: req.body.id_config,
        id_tecnico: req.body.id_tecnico,
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
      res.status(500).send({
        error: "Um erro ocorreu ao tentar editar a placa!",
      });
    }
  },
};