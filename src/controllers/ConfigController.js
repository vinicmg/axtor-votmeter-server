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
          order: [["id", "ASC"]],
          where: query,
        });
      } else {
        config = await Config.findAll({
          order: [["id", "ASC"]],
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
        fp_5_min: req.body.fp_5_min,
        fp_5_max: req.body.fp_5_max,
        fp_12_min: req.body.fp_12_min,
        fp_12_max: req.body.fp_12_max,
        fp_neg12_min: req.body.fp_neg12_min,
        fp_neg12_max: req.body.fp_neg12_max,
        osc_1khz_min: req.body.osc_1khz_min,
        osc_1khz_duty_min: req.body.osc_1khz_duty_min,
        osc_1khz_max: req.body.osc_1khz_max,
        osc_1khz_duty_max: req.body.osc_1khz_duty_max,
        osc_100hz_min: req.body.osc_100hz_min,
        osc_100hz_duty_min: req.body.osc_100hz_duty_min,
        osc_100hz_max: req.body.osc_100hz_max,
        osc_100hz_duty_max: req.body.osc_100hz_duty_max,
        osc_10khz_min: req.body.osc_10khz_min,
        osc_10khz_duty_min: req.body.osc_10khz_duty_min,
        osc_10khz_max: req.body.osc_10khz_max,
        osc_10khz_duty_max: req.body.osc_10khz_duty_max,
        capacitancia_min: req.body.capacitancia_min,
        capacitancia_max: req.body.capacitancia_max,
        sens_corrent_min: req.body.sens_corrent_min,
        sens_corrent_max: req.body.sens_corrent_max,
        indutancia_min: req.body.indutancia_min,
        indutancia_max: req.body.indutancia_max,
        corr_atracad12_min: req.body.corr_atracad12_min,
        corr_atracad12_max: req.body.corr_atracad12_max,
        offset_cabos_min: req.body.offset_cabos_min,
        offset_cabos_max: req.body.offset_cabos_max,
        corr_atracad13a_min: req.body.corr_atracad13a_min,
        corr_atracad13a_max: req.body.corr_atracad13a_max,
        corr_atracad13b_min: req.body.corr_atracad13b_min,
        corr_atracad13b_max: req.body.corr_atracad13b_max,
        pwm_pulsador_min: req.body.pwm_pulsador_min,
        pwm_pulsador_max: req.body.pwm_pulsador_max,
        pwm_vedacao_min: req.body.pwm_vedacao_min,
        pwm_vedacao_max: req.body.pwm_vedacao_max,
        res_carcaca_min: req.body.res_carcaca_min,
        res_carcaca_max: req.body.res_carcaca_max,
        res_hv_min: req.body.res_hv_min,
        res_hv_max: req.body.res_hv_max,
        fb_duty_min: req.body.fb_duty_min,
        fb_duty_max: req.body.fb_duty_max,
        fb_tensao_min: req.body.fb_tensao_min,
        fb_tensao_max: req.body.fb_tensao_max,
        tb_linear: req.body.tb_linear,
        tb_proporcional: req.body.tb_proporcional,
        res_hv_megometro: req.body.res_hv_megometro,
        offset_megometro: req.body.offset_megometro,
        res_megometro: req.body.res_megometro,
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
