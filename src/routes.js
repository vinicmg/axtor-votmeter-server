const SectorController = require("./controllers/SectorController")

module.exports = (app) => {
    app.get('/setor',
        SectorController.get
    )    
    app.delete('/setor/:id',
        SectorController.delete
    )
    app.put('/setor/editar/:id',
        SectorController.put
    )
    app.post('/cadastro/setor',
        SectorController.post
    )
}