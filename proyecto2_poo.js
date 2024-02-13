/*

+++Proyecto 2: Arturo 

Programa en JavaScript que permita a los usuarios crear encuestas, 
votar y ver los resultados en tiempo real. 

Paradigma: POO

- Definicion de un array de objetos con la estructura {id, total votos} para definir la estructura de la encuesta

- clase Usuario con un constructor que acepta nombre y apellido, metodos: votar que acepta una opcion de voto

- clase Encuesta con un constructor que acepta nombre encuesta y el array de objetos de la encuesta, metodos getEncuesta y contar Votos

- En el programa Principal se instancian 3 usuarios, se instancia una nueva encuesta

- Los 3 usuarios votan , dichos votos son registrados en la constante votaciones2 y se contabilizan los votos al final

fecha Entrega: 13 de Febrero 2024

*/



const votaciones2 = [
    { id: "Toyota", totalVotos: 0 },
    { id: "Nissan", totalVotos: 0 },
    { id: "Mazda", totalVotos: 0 },
  ];

class Usuario{
    constructor(nombre, apellido){
        this.Nombre=nombre
        this.Apellido=apellido
    }

    votar(opcion){
        const filteredResult = votaciones2.findIndex((e) => e.id == opcion);
        if(filteredResult== -1){
            console.log("--Voto Invalido")
        }
        else{
            console.log("--Voto Registrado---Gracias")
            votaciones2[filteredResult].totalVotos += 1
        }
    }

}

class Encuesta{
    //constructor(nombre_Encuesta, opc1, opc2, opc3){
    constructor(nombre_Encuesta, votaciones){
        this.Titulo_Encuesta=nombre_Encuesta
        this.votacion = votaciones
    }
    getEncuesta(){
        return this.votacion
    }
    contarVotos(){
        let total = this.votacion.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.totalVotos;
          }, 0);
        return total
    }

}

//Se crean 3 usuarios diferentes
const usuario1 = new Usuario("arturo","Y")
const usuario2 = new Usuario("raul","X")
const usuario3 = new Usuario("carlos","Z")

//Se crea una nueva encuesta
const nuevaEncuesta = new Encuesta("Carros",votaciones2)


//Los usuarios votan por diferentes opciones
usuario1.votar("Mazda")
usuario2.votar("Nissan")
usuario3.votar("Mazda")

//Se muestra en tiempo real las opciones
console.log(nuevaEncuesta.getEncuesta())

//Se muestra el total de votos
console.log("Votos en total: ",nuevaEncuesta.contarVotos())


