const Service = require("node-windows").Service;

const svc = new Service({
  name: "Axtor Server",
  description: "Axtor server running as a windows service.",
  script: "D:\\VueProject\\axtor\\axtor-votmeter-server\\src\\app.js",
});

svc.on("unistall", () => {
  console.log("Unistall complete");
});

svc.uninstall();
