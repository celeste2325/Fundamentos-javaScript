// creando un objeto persona de nombre celeste

var celeste = {
    nombre: "celeste",
    apellido: "lopez",
    edad: 26,
    extraccionista: true,
    abogada: false,
    estudiante: true
}

// funcion, evalua si las profesiones son true o false e imprime si el objeto persona se dedica o no a alguna de esas profesiones.

function imprimirProfesiones(persona) {
    // concatena un string
    console.log(`Hola me llamo ${persona.nombre} ${persona.apellido}, a continuacion mis conocimientos:`)

    if (persona.extraccionista) {
        console.log("soy extraccionista")
    }

    if (persona.estudiante) {
        console.log("soy estudiante")
    }
    else {
        console.log("no soy estudiante")
    }
    if (persona.abogada) {
        console.log("soy abogada")
    }
    else {
        console.log("no soy abogado")
    }

}

// llama a la funcion imprimir profesiones

imprimirProfesiones(celeste)



const MAYORIA_DE_EDAD = 18

// evalua si el objeto persona es mayor de edad
//Arrow functions= recibe como parametro edad que esta dentro de un objeto,
// como es una funcion de solo return se obvian las llaves y el return

const MAYOR_DE_EDAD = ({ edad }) => edad >= MAYORIA_DE_EDAD

// evalua si es menor de edad, usando operador ternario ?:

const MOSTRAR_MENOR_DE_EDAD = persona => (!MAYOR_DE_EDAD(persona)) ? console.log("es menor de edad") : ""

// imprime si el objeto persona menor de edad

MOSTRAR_MENOR_DE_EDAD(celeste)

// imprime si el objeto persona es mayor de edad

function imprimirMayorEdad(persona) {
    if (MAYOR_DE_EDAD(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
}

// llama a la funcion imprimirMayorEdad

imprimirMayorEdad(celeste)


// evalua si la funcion MAYOR_DE_EDAD es true o false, si es mayor de edad permite el acceso, si es menor de edad es denegado

const ACCESO_PERMITIDO_DENEGADO = persona => (MAYOR_DE_EDAD(persona) ? console.log("ACCESO PERMITIDO") : console.log("ACCESO DENEGADO"))


// llama a la funcion ACCESO_PERMITIDO_DENEGADO

ACCESO_PERMITIDO_DENEGADO(celeste)