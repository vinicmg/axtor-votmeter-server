const ConfigController = require("./controllers/ConfigController");
const PlateController = require("./controllers/PlateController");
const ReportController = require("./controllers/ReportController");
const SectorController = require("./controllers/SectorController");
const StepElectricController = require("./controllers/StepElectricController");
const StepElectronicController = require("./controllers/StepElectronicController");
const StepMechanicalController = require("./controllers/StepMechanicalController");
const StepPackingController = require("./controllers/StepPackingController");
const StepQualityController = require("./controllers/StepQualityController");
const TechnicianController = require("./controllers/TechnicianController");
const TypePlateController = require("./controllers/TypePlateController");

module.exports = (app) => {
  // Rotas SETOR
  app.get("/api/setor", SectorController.get);
  app.delete("/api/setor/:id", SectorController.delete);
  app.put("/api/setor/editar/:id", SectorController.put);
  app.post("/api/cadastro/setor", SectorController.post);
  // Rotas TECNICO
  app.get("/api/tecnico", TechnicianController.get);
  app.delete("/api/tecnico/:id", TechnicianController.delete);
  app.put("/api/tecnico/editar/:id", TechnicianController.put);
  app.post("/api/cadastro/tecnico", TechnicianController.post);
  // Rotas TIPO DE PLACA
  app.get("/api/tipodeplaca", TypePlateController.get);
  app.delete("/api/tipodeplaca/:id", TypePlateController.delete);
  app.put("/api/tipodeplaca/editar/:id", TypePlateController.put);
  app.post("/api/cadastro/tipodeplaca", TypePlateController.post);
  // Rotas CONFIG
  app.get("/api/configuracao", ConfigController.get);
  app.delete("/api/configuracao/:id", ConfigController.delete);
  app.put("/api/configuracao/editar/:id", ConfigController.put);
  app.post("/api/cadastro/configuracao", ConfigController.post);
  // Rotas PLATE
  app.get("/api/placa", PlateController.get);
  app.delete("/api/placa/:id", PlateController.delete);
  app.put("/api/placa/editar/:id", PlateController.put);
  app.post("/api/cadastro/placa", PlateController.post);
  // Rotas RELATÓRIOS
  app.get("/api/relatorios", ReportController.get);
  app.put("/api/relatorios/editar/:id", ReportController.put);
  app.post("/api/relatorios/novo", ReportController.post);
  // Rotas Etapas de Setor
  app.get("/api/etapas/eletrica", StepElectricController.get);
  app.get("/api/etapas/eletronica", StepElectronicController.get);
  app.get("/api/etapas/mecanica", StepMechanicalController.get);
  app.get("/api/etapas/qualidade", StepQualityController.get);
  app.get("/api/etapas/embalagem", StepQualityController.get);
  app.put("/api/etapas/eletrica/:id", StepElectricController.put);
  app.put("/api/etapas/eletronica/:id", StepElectronicController.put);
  app.put("/api/etapas/mecanica/:id", StepMechanicalController.put);
  app.put("/api/etapas/qualidade/:id", StepQualityController.put);
  app.put("/api/etapas/embalagem/:id", StepPackingController.put);
  app.post("/api/cadastro/etapas/eletrica", StepElectricController.post);
  app.post("/api/cadastro/etapas/eletronica", StepElectronicController.post);
  app.post("/api/cadastro/etapas/mecanica", StepMechanicalController.post);
  app.post("/api/cadastro/etapas/qualidade", StepQualityController.post);
  app.post("/api/cadastro/etapas/embalagem", StepPackingController.post);
};
