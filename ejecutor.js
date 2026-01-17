console.log("Sistema Iniciado...");

// agregamos un sospechoso extra
registrarSospechoso("John Connor", "LEADER_001", 5, false, [
  "Hackeo de cajeros",
]);

// fase 5 reporte final

function generarReporteSeguridad() {
  // listado general
  console.log("--- INFORME DE INTELIGENCIA ACTUALIZADO ---");
  console.log("--- NOMBRE".padEnd(20) + "| " + "PELIGROSIDAD ---");
  console.log("-".repeat(50));// Linea separadora
  listarSospechosos();
}

generarReporteSeguridad();