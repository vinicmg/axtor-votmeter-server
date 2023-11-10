const SectorController = require("./controllers/SectorController")
const TechnicianController = require("./controllers/TechnicianController")

module.exports = (app) => {
    // Rotas SETOR
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
    // Rotas TECNICO
    app.get('/tecnico',
        TechnicianController.get
    )
    app.delete('/tecnico/:id',
        TechnicianController.delete
    )
    app.put('/tecnico/editar/:id',
        TechnicianController.put
    )
    app.post('/cadastro/tecnico',
        TechnicianController.post
    )
}