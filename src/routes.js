const ConfigController = require("./controllers/ConfigController")
const PlateController = require("./controllers/PlateController")
const ReportController = require("./controllers/ReportController")
const SectorController = require("./controllers/SectorController")
const TechnicianController = require("./controllers/TechnicianController")
const TypePlateController = require("./controllers/TypePlateController")

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
    // Rotas TIPO DE PLACA
    app.get('/tipodeplaca',
        TypePlateController.get
    )
    app.delete('/tipodeplaca/:id',
        TypePlateController.delete
    )
    app.put('/tipodeplaca/editar/:id',
        TypePlateController.put
    )
    app.post('/cadastro/tipodeplaca',
        TypePlateController.post
    )
    // Rotas CONFIG
    app.get('/configuracao',
        ConfigController.get
    )
    app.delete('/configuracao/:id',
        ConfigController.delete
    )
    app.put('/configuracao/editar/:id',
        ConfigController.put
    )
    app.post('/cadastro/configuracao',
        ConfigController.post
    )
    // Rotas PLATE
    app.get('/placa',
        PlateController.get
    )
    app.delete('/placa/:id',
        PlateController.delete
    )
    app.put('/placa/editar/:id',
        PlateController.put
    )
    app.post('/cadastro/placa',
        PlateController.post
    )
    // Rotas RELATÓRIOS
    app.get('/relatorios',
        ReportController.get
    )
    app.put('/relatorios/editar/:id',
        ReportController.put
    )
    app.post('/relatorios/novo',
        ReportController.post
    )
}