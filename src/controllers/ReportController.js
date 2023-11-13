const { Report } = require('../models')

module.exports = {
    // Get: Buscar registro de relatórios
    async get(req, res) {
        try {
            let report = null
            const search = req.query.search
            if (search) {
                report = await Report.findAll({
                    where: {
                        $or: [
                            'dt_inicial',
                            'dt_final',
                            'num_serie'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                report = await Report.findAll({
                    limit: 50
                })
            }
            res.send(report)
        } catch (err) {
            res.status(500).send({
                error: 'Ocorreu um erro ao buscar os relatórios!'
            })
        }
    },
    // Post: Criar um relatório
    async post(req, res) {
        try {
            const reportBody = {
                num_serie: req.body.num_serie,
                id_tp_placa: req.body.id_tp_placa,
                id_config: req.body.id_config,
                id_tecnico: req.body.id_tecnico,
                pregrav_5: req.body.pregrav_5,
                pregav_12: req.body.pregav_12,
                pregrav_neg12: req.body.pregrav_neg12,
                posgrav_5: req.body.posgrav_5,
                posgrav_12: req.body.posgrav_12,
                posgrav_neg12: req.body.posgrav_neg12,
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
                osc_5: req.body.osc_5,
                osc_gnd: req.body.osc_gnd,
                osc_12: req.body.osc_12,
                osc_neg12: req.body.osc_neg12,
                osc_vref: req.body.osc_vref,
                osc_1khz: req.body.osc_1khz,
                osc_100hz: req.body.osc_100hz,
                osc_10khz: req.body.osc_10khz,
            }
        } catch (err) {
            res.status(500).send({
                error: 'Ocorreu um erro ao criar o relatório!'
            })
        }
    },
    // Put: Editar um registro de relatório
    async put(req, res) {
        try {
            await Report.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Um erro ocorreu ao tentar editar o relatório!'
            })
        }
    }
}