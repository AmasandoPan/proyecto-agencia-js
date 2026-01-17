console.log("Sistema Iniciado...");

// agregamos un sospechoso extra
registrarSospechoso("John Connor", "LEADER_001", 5, false, [
  "Hackeo de cajeros",
]);
registrarSospechoso("Viajero del Tiempo", "SECRET_400", 10, false, [
  "Viajes ilegales en el tiempo",
]);

console.log(analizarCodigo(sospechoso1));
console.log(analizarCodigo(sospechoso2));
console.log(analizarCodigo(sospechoso3));

//reporte final

generarReporteSeguridad();