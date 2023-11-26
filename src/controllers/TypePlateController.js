const { TypePlate } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  // Get: Buscar os valores de tipo de placa
  async get(req, res) {
    try {
      let typePlate = null;
      const { nome, createdAt, modelo } = req.query;
      let query = {};

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

      if (modelo != null) {
        query.modelo = {
          [Op.iLike]: `%${modelo}%`,
        };
      }

      if (nome || createdAt || modelo) {
        typePlate = await TypePlate.findAll({
          order: [["id", "ASC"]],
          where: query,
        });
      } else {
        typePlate = await TypePlate.findAll({
          order: [["id", "ASC"]],
          limit: 50,
        });
      }
      res.send(typePlate);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao buscar os tipos de placa!",
      });
    }
  },
  // Post: Cadastrar um tipo de placa
  async post(req, res) {
    try {
      const typePlateBody = {
        nome: req.body.nome,
        modelo: req.body.modelo,
      };

      const typePlate = await TypePlate.create(typePlateBody);
      res.send(typePlate);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao criar um tipo de placa!",
      });
    }
  },
  // Delete: Deletar um tipo de placa
  async delete(req, res) {
    try {
      const typePlate = await TypePlate.destroy({
        where: {
          id: req.params.id,
        },
      }).then((num) => {
        if (num == 1) {
          res.send({
            message: "Tipo de placa deletado com sucesso!",
          });
        } else {
          res.send({
            message: "Não foi possível deletar o tipo de placa!",
          });
        }
      });
    } catch (err) {
      res.status(500).send({
        error: "Um erro ocorreu ao tentar deletar o tipo de placa!",
      });
    }
  },
  // Put: Editar um tipo de placa
  async put(req, res) {
    try {
      await TypePlate.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Um erro ocorreu ao tentar editar o tipo de placa!",
      });
    }
  },
};
