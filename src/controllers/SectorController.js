const { Sector } = require('../models')

module.exports = {
    // get: Buscar os valores para exibição em tela
    async get(req, res) {
        try {
            let sector = null
            const search = req.query.search
            if (search) {
                sector = await Sector.findAll({
                    where: {
                        $or: [
                            'nome'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                sector = await Sector.findAll({
                    limit: 50
                })
            }
            res.send(sector)
        } catch (err) {
            res.status(500).send({
                error: 'Ocorreu um erro ao buscar os setores!'
            })
        }
    },
    // Post: Criar um setor
    async post(req, res) {
        try {
            const sectorBody = {
                nome: req.body.nome
            }
        
            const sector = await Sector.create(sectorBody)
            res.send(sector)
        } catch (err) {
            res.status(500).send({
                error: 'Ocorreu um erro ao criar um setor!'
            })
        }
    },    
    // Delete: Deletar um registro de setor
    async delete(req, res) {
        try {
            const sector = await Sector.destroy({
                where: {
                    id: req.params.id
                }
            }).then(num => {
                if (num == 1) {
                    res.send({
                        message: "Setor deletado com sucesso!"
                    })
                } else {
                    res.send({
                        message: "Não foi possível deletar o setor!"
                    })
                }
            })            
        } catch (err) {
            res.status(500).send({
                error: 'Um erro ocorreu ao tentar deletar o setor!'
            })
        }
    },
    // Put: Editar um registro de setor
    async put(req, res) {
        try {
            await Sector.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Um erro ocorreu ao tentar editar o setor!'
            })
        }
    }
}