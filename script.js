// Fase 2 Base de Datos

const baseDeDatos = [];
const INDICE_LISTAR_SOSPECHOSO = 0;
const alumno1 = "Francisco Gonzalez";
const alumno2 = "Jeremy Garrido";

const sospechoso1 = {
  nombre: "T-800",
  codigo: "   SECRET_Peligro_101   ",
  nivelPeligrosidad: 9,
  capturado: false,
  delitos: [
    "Homicidio múltiple",
    "Suplantación de identidad humana",
    "Daños estructurales a propiedad privada y pública",
  ],
};

const sospechoso2 = {
  nombre: "T-1000",
  codigo: "   SECRET_Peligro_102   ",
  nivelPeligrosidad: 10,
  capturado: false,
  delitos: [
    "Impersonación avanzada de individuos",
    "Infiltración en fuerzas policiales",
    "Obstrucción violenta de la justicia",
  ],
};

const sospechoso3 = {
  nombre: "Sarah Connor",
  codigo: "   NORMAL_RESISTANCE_103  ",
  nivelPeligrosidad: 7,
  capturado: true,
  delitos: [
    "Destrucción de propiedad corporativa",
    "Uso y portación ilegal de armas de fuego",
    "Fuga de centro psiquiátrico",
  ],
};

baseDeDatos.push(sospechoso1);
baseDeDatos.push(sospechoso2);
baseDeDatos.push(sospechoso3);

// Fase 3 Herramientas de Gestión

// creamos una funcion para registrar nuevos sospechosos y lo agregamos al arreglo

function registrarSospechoso(
  nombre,
  codigo,
  nivelPeligrosidad,
  capturado,
  delitos
) {
  const nuevoSospechoso = {
    nombre: nombre,
    codigo: codigo,
    nivelPeligrosidad: nivelPeligrosidad,
    capturado: capturado,
    delitos: delitos,
  };

  baseDeDatos.push(nuevoSospechoso);

  console.log(`Sospechoso ${nombre} ha sigo agregado correctamente`);
}

// listar sospechosos (recorremos el arreglo baseDeDatos)

function listarSospechosos() {
  for (const INDICE_LISTAR_SOSPECHOSO of baseDeDatos) {
    console.log(
      `${INDICE_LISTAR_SOSPECHOSO.nombre}`.padEnd(20) +
        "| " +
        `${INDICE_LISTAR_SOSPECHOSO.nivelPeligrosidad}`
    );
  }
}

// Fase 4 El Decodificador

function analizarCodigo(sospechoso) {
  const codigoSinEspacios = sospechoso.codigo.trim();

  if (!codigoSinEspacios.startsWith("SECRET")) {
    return "Codigo Normal";
  }

  const codigoExtraido = codigoSinEspacios.substring(7);

  if (codigoExtraido.includes("Peligro")) {
    return "Alta Prioridad";
  }

  return "Codigo Normal";
}

// fase 5 reporte final

function generarReporteSeguridad() {
  // listado general
  console.log("--- INFORME DE INTELIGENCIA ACTUALIZADO ---");
  console.log("--- NOMBRE".padEnd(20) + "| " + "PELIGROSIDAD ---");
  console.log("-".repeat(50)); // Linea separadora
  listarSospechosos();
  console.log("-".repeat(50)); 
  console.log(`Sistema creado por los agentes ${alumno1} y ${alumno2}`);
}


