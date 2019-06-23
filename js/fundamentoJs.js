// // creando un objeto persona de nombre celeste

// var celeste = {
//     nombre: "celeste",
//     apellido: "lopez",
//     edad: 26,
//     extraccionista: true,
//     abogada: false,
//     estudiante: true
// }

// // funcion, evalua si las profesiones son true o false e imprime si el objeto persona se dedica o no a alguna de esas profesiones.

// function imprimirProfesiones(persona) {
//     // concatena un string
//     console.log(`Hola me llamo ${persona.nombre} ${persona.apellido}, a continuacion mis conocimientos:`)

//     if (persona.extraccionista) {
//         console.log("soy extraccionista")
//     }

//     if (persona.estudiante) {
//         console.log("soy estudiante")
//     }
//     else {
//         console.log("no soy estudiante")
//     }
//     if (persona.abogada) {
//         console.log("soy abogada")
//     }
//     else {
//         console.log("no soy abogado")
//     }

// }

// // llama a la funcion imprimir profesiones

// imprimirProfesiones(celeste)



// const MAYORIA_DE_EDAD = 18

// // evalua si el objeto persona es mayor de edad
// //Arrow functions= recibe como parametro edad que esta dentro de un objeto,
// // como es una funcion de solo return se obvian las llaves y el return

// const MAYOR_DE_EDAD = ({ edad }) => edad >= MAYORIA_DE_EDAD

// // evalua si es menor de edad, usando operador ternario ?:

// const MOSTRAR_MENOR_DE_EDAD = persona => (!MAYOR_DE_EDAD(persona)) ? console.log("es menor de edad") : ""

// // imprime si el objeto persona menor de edad

// MOSTRAR_MENOR_DE_EDAD(celeste)

// // imprime si el objeto persona es mayor de edad

// function imprimirMayorEdad(persona) {
//     if (MAYOR_DE_EDAD(persona)) {
//         console.log(`${persona.nombre} es mayor de edad`)
//     }
// }

// // llama a la funcion imprimirMayorEdad

// imprimirMayorEdad(celeste)


// // evalua si la funcion MAYOR_DE_EDAD es true o false, si es mayor de edad permite el acceso, si es menor de edad es denegado

// const ACCESO_PERMITIDO_DENEGADO = persona => (MAYOR_DE_EDAD(persona) ? console.log("ACCESO PERMITIDO") : console.log("ACCESO DENEGADO"))


// // llama a la funcion ACCESO_PERMITIDO_DENEGADO

// ACCESO_PERMITIDO_DENEGADO(celeste)


// // Do-while

// var incremento = 0

// const llueve = () => Math.random() < 0.3


// do {
//     debugger
//     incremento++
// } while (!llueve());

// if (incremento === 1) {
//     console.log(`fui a ver ${incremento} vez si llovía`)
// } else { console.log(`fui a ver ${incremento} veces si llovía`) }

// // /Do-while

// // swich
// // prompt(): alert para realizar una pregunta.
// var signo = prompt('¿Cuál es tu signo zodiacal?')



// switch (signo){
//     case 'aries':
//         console.log('Aprende a felicitarte cuando alcances tus metas importantes, esto te dará la motivación para seguir adelante en busca de mejores horizontes.')
//         break;

//     case 'tauro':
//         console.log('No busques lucrar con las desgracias ajenas. Avócate siempre a las competencias en condiciones de igualdad.')
//         break;

//     case 'geminis':
//     case 'géminis':
//         console.log('Deberás deja de lado las perdidas de tiempo y afrontar tus responsabilidades. No te puedes dejar llevar por el desgano. Busca superarte a ti mismo')
//         break;

//     case 'cancer':
//     case 'cáncer':
//         console.log('La felicidad no es un estado absoluto al que se llegue de manera directa. Sino que es la suma de aquellos buenos momentos que guardas en tu corazón.')
//         break;

//     case 'leo':
//         console.log('No te encierres en tu forma de ver las cosas. Debes aprender a tomar diferentes puntos de vista y a escuchar las opiniones ajenas.')
//         break;

//     case 'virgo':
//         console.log('No corras por la vida en un frenesí apresurado, saborea cada momento. La vida no es una carrera sino un viaje para disfrutar.')
//         break;

//     case 'libra':
//         console.log('Solo tu sabes cuales son tus sentimientos hacia tu pareja, apóyate en esto para realizar los cambios que necesites para sacar la relación adelante.')
//         break;

//     case 'escorpio':
//         console.log('Aprovecha cada oportunidad que tengas de alimentar tu confianza y autoestima en lo que a la conquista se refiere. Asegúrate de no romper corazones.')
//         break;

//     case 'sagitario':
//         console.log('La sabiduría proviene exclusivamente de la experiencia acumulada. Y la única manera de alcanzarla reside en aprender de nuestras vivencias.')
//         break;

//     case 'capricornio':
//         console.log('No eres la única persona en ser apresada por la miseria o la soledad, estas forman parte de la vida de todos. Esta en ti el poder recuperarte.')
//         break;

//     case 'acuario':
//         console.log('No te permitas ser objeto de manipulaciones o juegos mentales. Mantén claras tus habilidades y permanece seguro de ti mismo. No dejes que te alteren.')
//         break;

//     case 'piscis':
//         console.log('Cumple aquellos compromisos en los que te veas involucrado a rajatabla. La puntualidad es síntoma de seriedad y será un punto a tu favor.')
//         break;


//     default:
//         console.log('no corresponde con un signo zodiacal validos')
//         break;
// }

// // /swich

// filtrar un array con la funcion .filtrar()

var juan = {
        nombre: "juan",
        apellido: "valero",
        edad: 30,
        altura: 1.82,
        cantidadLibros: 8
}
var cele = {
        nombre: "cele",
        apellido: "lopez",
        edad: 26,
        altura: 1.62,
        cantidadLibros: 10
}
var ana = {
        nombre: "ana",
        apellido: "liendo",
        edad: 49,
        altura: 1.60,
        cantidadLibros: 2
}
var pedro = {
        nombre: "pedro",
        apellido: "lopez",
        edad: 50,
        altura: 1.90,
        cantidadLibros: 20
}
var anahis = {
        nombre: "anahis",
        apellido: "diaz",
        edad: 13,
        altura: 1.50,
        cantidadLibros: 40
}
var personas = [juan, cele, ana, anahis, pedro] //arreglo de 5 objetos

// const DETERMINA_ESTATURA = 1.70

// var altos = personas.altura > DETERMINA_ESTATURA
// var bajos = personas.altura < DETERMINA_ESTATURA

// var personasAltas = personas.filter(altos) // filter recorre el arreglo buscando objeto q cumpla con la condicion(es una funcion), devuelve un nvo arreglo.
// var personasBajas = personas.filter(bajos)

// /Array

// transformar un array con funcion .map()

var METRO_CENTIMENTROS = 100

const pasarAlturaAcms = persona => ({ //para retornar un objeto, las llaves deben estar envueltas en parentesis
        ...persona, //nvo objeto persona para no modificar la altura del array original. la idea es tener 2 arrays 1 con altura en ms y otro en cms
        altura: persona.altura * METRO_CENTIMENTROS
})

var alturaEnCm = personas.map(pasarAlturaAcms) // .map() modifica elementos del array original(en este caso la altura)

// Reducir un array a un unico valor con la funcion .reduce()

const reducir = (acumulador, { cantidadLibros }) => cantidadLibros + acumulador

totalDeLibrosDePersonas = personas.reduce(reducir, 0) //recibe 1 una funcion y el valor de inicio del acumulador.


// clases

//para crear una clase en js se crea una funcion. y es como crear un constructor en java


//constructor de la clase Persona
//this.persona va a ser igual a un objeto nuevo, para no sobreescribir el anterior
function Persona(persona) {
        this.persona = { nombre: persona.nombre, apellido: persona.apellido, altura: persona.altura };

}

//crear instancias de la clase persona
var juancho = new Persona(juan)
var celeste = new Persona(cele)
var anaRosa = new Persona(ana)
var pedroMiguel = new Persona(pedro)
var anahisVictoria = new Persona(anahis)

//crear un metodo para ser usado por el objeto persona, se usa .prototype el nombre del metodo y se iguala a una funcion
Persona.prototype.saludar = function () {
        console.log(`${this.persona.nombre} ${this.persona.apellido} ${this.persona.altura}`)
}

var personas = [juancho, celeste, anaRosa, pedroMiguel, anahisVictoria];//creando array personas.

// arrow function para devolver nombre,apellido,altura de personas.
const mostrarPersonas = () => {
        // for (let i = 0; i < personas.length; i++) {
        //     personas[i].saludar(); //recorre el arreglo y a para cada persona invoca el metodo saludar() 

        // }
        console.log('nombre y altura de personas:')
        personas.forEach(element => { //for mejorado
                element.saludar();
        });
} 

const altos =({persona})=> persona.altura > 1.70 // arrow function evalua las personas con altura mayor a 1.70. recibe como parametro un objeto persona q esta dentro de otro objeto

var personasMasAltas = personas.filter(altos); //devuelve un array con los valores q cumplan con la condicion de la funcion altos.

mostrarPersonas();//invocando metodo mostrarPersonas.
console.log(personasMasAltas)

// /clases