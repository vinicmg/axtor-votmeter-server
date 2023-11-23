const { Technician, Sector } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  // Get: Buscar os valores para exibição em tela
  async get(req, res) {
    try {
      let technician = null;
      const { nome, createdAt, setornome } = req.query;
      let query = {};
      let querySector = {};

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
      if (setornome != null) {
        querySector.nome = {
          [Op.iLike]: `%${setornome}%`,
        };
      }

      if (nome || setornome || createdAt) {
        technician = await Technician.findAll({
          include: [
            {
              model: Sector,
              where: querySector,
            },
          ],
          where: query,
        });
      } else {
        technician = await Technician.findAll({
          include: [
            {
              model: Sector,
            },
          ],
          limit: 50,
        });
      }
      res.send(technician);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao buscar os técnicos!",
      });
    }
  },
  // Post: Criar um técnico
  async post(req, res) {
    try {
      const technicianBody = {
        nome: req.body.nome,
        id_setor: req.body.id_setor,
      };

      const technician = await Technician.create(technicianBody);
      res.send(technician);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao criar um técnico!",
      });
    }
  },
  // Delete: Deletar um técnico
  async delete(req, res) {
    try {
      const technician = await Technician.destroy({
        where: {
          id: req.params.id,
        },
      }).then((num) => {
        if (num == 1) {
          res.send({
            message: "Técnico deletado com sucesso!",
          });
        } else {
          res.send({
            message: "Não foi possível deletar o técnico!",
          });
        }
      });
    } catch (err) {
      res.status(500).send({
        error: "Um erro ocorreu ao tentar deletar o técnico!",
      });
    }
  },
  // Put: Editar um técnico
  async put(req, res) {
    try {
      await Technician.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Um erro ocorreu ao tentar editar o técnico!",
      });
    }
  },
};
