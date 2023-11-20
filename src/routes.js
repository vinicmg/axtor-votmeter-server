const ConfigController = require("./controllers/ConfigController")
const PlateController = require("./controllers/PlateController")
const ReportController = require("./controllers/ReportController")
const SectorController = require("./controllers/SectorController")
const TechnicianController = require("./controllers/TechnicianController")
const TypePlateController = require("./controllers/TypePlateController")

module.exports = (app) => {
    // Rotas SETOR
    app.get('/api/setor',
        SectorController.get
    )    
    app.delete('/api/setor/:id',
        SectorController.delete
    )
    app.put('/api/setor/editar/:id',
        SectorController.put
    )
    app.post('/api/cadastro/setor',
        SectorController.post
    )
    // Rotas TECNICO
    app.get('/api/tecnico',
        TechnicianController.get
    )
    app.delete('/api/tecnico/:id',
        TechnicianController.delete
    )
    app.put('/api/tecnico/editar/:id',
        TechnicianController.put
    )
    app.post('/api/cadastro/tecnico',
        TechnicianController.post
    )
    // Rotas TIPO DE PLACA
    app.get('/api/tipodeplaca',
        TypePlateController.get
    )
    app.delete('/api/tipodeplaca/:id',
        TypePlateController.delete
    )
    app.put('/api/tipodeplaca/editar/:id',
        TypePlateController.put
    )
    app.post('/api/cadastro/tipodeplaca',
        TypePlateController.post
    )
    // Rotas CONFIG
    app.get('/api/configuracao',
        ConfigController.get
    )
    app.delete('/api/configuracao/:id',
        ConfigController.delete
    )
    app.put('/api/configuracao/editar/:id',
        ConfigController.put
    )
    app.post('/api/cadastro/configuracao',
        ConfigController.post
    )
    // Rotas PLATE
    app.get('/api/placa',
        PlateController.get
    )
    app.delete('/api/placa/:id',
        PlateController.delete
    )
    app.put('/api/placa/editar/:id',
        PlateController.put
    )
    app.post('/api/cadastro/placa',
        PlateController.post
    )
    // Rotas RELATÓRIOS
    app.get('/api/relatorios',
        ReportController.get
    )
    app.put('/api/relatorios/editar/:id',
        ReportController.put
    )
    app.post('/api/relatorios/novo',
        ReportController.post
    )
}