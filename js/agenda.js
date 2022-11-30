class Doctor {
    constructor(nombreDoc, horario, lugar) {
        this.nombreDoc = nombreDoc;
        this.horario = horario;
        this.pacientes = 0;
        this.lugar = lugar;
    }

    ocupar() {
        this.pacientes++;
    }

    cancelar() {
        this.pacientes--;
    }

    consultar() {
        let hora;
        if (this.horario === "M" || this.horario === "m") {
        hora = "mañana";
        } else {
        hora = "tarde";
        };
        return this.nombreDoc + " atendiendo en " + this.lugar + " en el horario " + hora + " tiene " + this.pacientes + " pacientes";
    }
}

const doctor1 = new Doctor("Felicitas Martinez", "M", "HPC");
const doctor2 = new Doctor("Pedro Perez", "M", "Clinica Colon");
const doctor3 = new Doctor("Mariquena Vega", "T", "Clinica Pueyrredon");
const doctor4 = new Doctor("Carolina Juanez", "M", "Hospital Pepito");
const doctor5 = new Doctor("Ivo Gross", "T", "Clinica Tenros");

const doctores =  [doctor1, doctor2, doctor3, doctor4, doctor5];
const horario = prompt("Ingrese M para ver los doctores de la mañana o T para los doctores de la tarde");
let numeroDeDoctor;
let numeroDoctoresM = 0;
let numeroDoctoresT = 0;

function contarDoctoresPorHorarios() {
    for(let i = 0; i < doctores.length; i++) {
        if(doctores[i].horario === "M" || doctores[i].horario === "m") {
            numeroDoctoresM++;
        } else {
            numeroDoctoresT++;
        }
    }
};

function mostrarDoctoresPorHorarios() {
  for(let i=0; i < doctores.length; i++) {
    if (doctores[i].horario === horario.toUpperCase()) {
        console.log(doctores[i].nombreDoc);
    }
  }
};

function mostrarDoctores() {
    for(let i=0; i < doctores.length; i++) {
      console.log(doctores[i].consultar());
    }
  };

function sacarTurnoPorHorario() {
    if(horario === "M" || horario === "m") {
        numeroDeDoctor = Number(prompt("Ingrese un numero entre 1 y " + numeroDoctoresM + " indicando con que doctor quiere un turno"));
    } else {
        numeroDeDoctor = Number(prompt("Ingrese un numero entre 1 y " + numeroDoctoresT + " indicando con que doctor quiere un turno"));
    };
    doctores[numeroDeDoctor].ocupar();
}

contarDoctoresPorHorarios();
mostrarDoctoresPorHorarios();
sacarTurnoPorHorario();
mostrarDoctores();

