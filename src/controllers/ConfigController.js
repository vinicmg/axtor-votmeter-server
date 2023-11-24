const { Config } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  // Get: Buscar os valores para exibição em tela
  async get(req, res) {
    try {
      let config = null;
      const { nome, createdAt } = req.query;
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

      if (nome || createdAt) {
        config = await Config.findAll({
          where: query,
        });
      } else {
        config = await Config.findAll({
          limit: 50,
        });
      }
      res.send(config);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao buscar configurações!",
      });
    }
  },
  // Post: Criar uma configuração
  async post(req, res) {
    try {
      const configBody = {
        nome: req.body.nome,
        pregrav_5_min: req.body.pregrav_5_min,
        pregrav_5_max: req.body.pregrav_5_max,
        pregrav_12_min: req.body.pregrav_12_min,
        pregrav_12_max: req.body.pregrav_12_max,
        pregrav_neg12_min: req.body.pregrav_neg12_min,
        pregrav_neg12_max: req.body.pregrav_neg12_max,
        posgrav_5_min: req.body.posgrav_5_min,
        posgrav_5_max: req.body.posgrav_5_max,
        posgrav_12_min: req.body.posgrav_12_min,
        posgrav_12_max: req.body.posgrav_12_max,
        posgrav_neg12_min: req.body.posgrav_neg12_min,
        posgrav_neg12_max: req.body.posgrav_neg12_max,
        trim_rv1: req.body.trim_rv1,
        trim_rv2: req.body.trim_rv2,
        trim_rv3: req.body.trim_rv3,
        trim_rv4: req.body.trim_rv4,
        trim_rv5: req.body.trim_rv5,
        trim_rv6: req.body.trim_rv6,
        trim_rv7: req.body.trim_rv7,
        trim_rv8: req.body.trim_rv8,
        trim_rv9: req.body.trim_rv9,
        trim_rv10: req.body.trim_rv10,
        osc_5_min: req.body.osc_5_min,
        osc_5_max: req.body.osc_5_max,
        osc_gnd_min: req.body.osc_gnd_min,
        osc_gnd_max: req.body.osc_gnd_max,
        osc_12_min: req.body.osc_12_min,
        osc_12_max: req.body.osc_12_max,
        osc_neg12_min: req.body.osc_neg12_min,
        osc_neg12_max: req.body.osc_neg12_max,
        osc_vref_min: req.body.osc_vref_min,
        osc_vref_max: req.body.osc_vref_max,
        osc_1khz_min: req.body.osc_1khz_min,
        osc_1khz_max: req.body.osc_1khz_max,
        osc_100hz_min: req.body.osc_100hz_min,
        osc_100hz_max: req.body.osc_100hz_max,
        osc_10khz_min: req.body.osc_10khz_min,
        osc_10khz_max: req.body.osc_10khz_max,
      };

      const config = await Config.create(configBody);
      res.send(config);
    } catch (err) {
      res.status(500).send({
        error: "Ocorreu um erro ao criar uma configuração!",
      });
    }
  },
  // Delete: Deletar um registro de configuração
  async delete(req, res) {
    try {
      const config = await Config.destroy({
        where: {
          id: req.params.id,
        },
      }).then((num) => {
        if (num == 1) {
          res.send({
            message: "Configuração deletada com sucesso!",
          });
        } else {
          res.send({
            message: "Não foi possivel deletar a configuração!",
          });
        }
      });
    } catch (err) {
      res.status(500).send({
        error: "Um erro ocorreu ao tentar deletar a configuração!",
      });
    }
  },
  // Put: Editar um registro de configuração
  async put(req, res) {
    try {
      await Config.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Um erro ocorreu ao tentar editar a configuração!",
      });
    }
  },
};
