/*
El siguiente trabajo consta de una agenda de doctores a la cual el usuario puede acceder al ingresar en que turno
ya sea mañana o tarde desea atenderse. En funcion al turno ingresado, visualizara la lista de doctores. En un siguiente
paso, debera ingresar con que doctor desea atenderse y luego se incrementara la visita de ese doctor en una unidad.
*/

/*
for(let i=0; i < doctores.length; i++) {
    if (doctores[i].horario === horario.toUpperCase()) {
      console.log(i + ": " + doctores[i].nombreDoc);
    }
*/


//Registro del paciente
let today = new Date();
const registro = [];
const cantidad = 1;


do{
  let nombreP   = prompt("Ingrese su nombre");
  let apellidoP = prompt("Ingrese su apellido")
  let numeroDoc = prompt("Ingrese su número de documento")
  registro.push(  {nombrePaciente:nombreP.toUpperCase(),
                   apellidoPaciente:apellidoP.toUpperCase(),
                   numeroDocumento:numeroDoc.toUpperCase() } );
 } while (registro.lenght === cantidad);


class Doctor {
    constructor(nombreDoc, horario, lugar,tarifa) {
        this.nombreDoc = nombreDoc;
        this.horario   = horario;
        this.pacientes = 0;
        this.lugar     = lugar;
        this.tarifa    = tarifa;
        
    };
  
    ocupar() {
        this.pacientes++;
    };

    cancelar() {
        this.pacientes--;
    };

    consultar() {
        let hora;
        if (this.horario.toLowerCase() === "m") {
        hora = "mañana" ;
        } else if (this.horario.toLowerCase() === "t") {
        hora = "tarde";
        };
        return this.nombreDoc + " atendiendo en " + this.lugar + " en el horario " + hora + " tiene " + this.pacientes + " pacientes";
        
    };
};

// creacion de cada doctor
const doctor1 = new Doctor("Felicitas Martinez", "M", "Consultorio Nº: 1. ", 4000);
const doctor2 = new Doctor("Pedro Perez", "M", "Consultorio Nº: 2. ", 5500);
const doctor3 = new Doctor("Mariquena Vega", "T", "Consultorio Nº: 3. ",3550);
const doctor4 = new Doctor("Carolina Juanez", "M", "Consultorio Nº: 3. ",3900);
const doctor5 = new Doctor("Ivo Gross", "T", "Consultorio Nº: 1.",10500);

// lista de doctores
const doctores =  [doctor1, doctor2, doctor3, doctor4, doctor5];

// interaccion con el usuario
const horario = prompt("Ingrese M para ver los doctores de la mañana o T para los doctores de la tarde");
let numeroDeDoctor;

const horarioLetras = (horario.toLowerCase() === "m") ? "mañana" : "tarde";

/* 
uso el metodo de arriba, en vez del de abajo porque estoy entre el mañana o tarde, no tengo otras opciones.

let horarioletras

if (horario.toLowerCase() === "m") {
  horarioLetras = "mañana";
} else {
  horarioLetras = "tarde";
};
*/

function mostrarDoctoresPorHorarios() {
  if (horario.toUpperCase() === "M") {
    console.log("Doctores que trabajan a la mañana");
  } else if(horario.toUpperCase() === "T"){
    console.log("Doctores que trabajan a la tarde");
  };
  
  for(let i=0; i < doctores.length; i++) {
    if (doctores[i].horario === horario.toUpperCase()) {
      console.log(i + ": " + doctores[i].nombreDoc + " y su consulta vale $" + doctores[i].tarifa);
    }
  };
   
};

function obraSocial(){
  const obraSoc = prompt("Si tiene obra social ingrese la letra 'S'");
  if( obraSoc.toUpperCase() === "S") {
    const conObraSocial = doctores.map((el) => ({
      nombreDoc: el.nombreDoc,
      tarifa: el.tarifa * 0.75,
      horario: el.horario
    }));
    
    console.log("Precio de la consulta con Obra Social: ");
    for(let i=0; i<conObraSocial.length; i++) {
      if (conObraSocial[i].horario ===horario.toUpperCase()) {
        console.log(i + ":" + conObraSocial[i].nombreDoc +" ,y su consulta vale $"+ conObraSocial[i].tarifa)
      }
    }
  
    /*
    for(let i=0; i < doctores.length; i++) {
      if (doctores[i].horario === horario.toUpperCase()) {
        console.log( i + ": " + doctores[i].nombreDoc + " y su consulta vale = " + doctores[i].tarifa * 0.75);
      }
      */
  }
};
  
  


function sacarTurno() {
  do {
    numeroDeDoctor = Number(prompt("Ingrese el numero del doctor con quien desea un turno"));
  } while (numeroDeDoctor < 0 || numeroDeDoctor >= doctores.length );
  doctores[numeroDeDoctor].ocupar();

  console.log( registro[0].nombrePaciente + " " + registro[0].apellidoPaciente + " con DNI:" + registro[0].numeroDocumento + " ha registrado un turno en el horario '" + horarioLetras + "' con el/la doctor/a '" + doctores[numeroDeDoctor].nombreDoc + "'. Fecha de registro: " + today);
};

function mostrarDoctores() {
  console.log("Turnos registrados por cada doctor:");

  for(let i=0; i < doctores.length; i++) {
    console.log(doctores[i].consultar());
   }
};

function quieroMiTurno(){

};

// ejecucion del programa
quieroMiTurno();
mostrarDoctoresPorHorarios();
obraSocial();
sacarTurno();
mostrarDoctores();








