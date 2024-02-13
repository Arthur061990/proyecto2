/*

+++Proyecto 2: Arturo 

Programa en JavaScript que permita a los usuarios crear encuestas, 
votar y ver los resultados en tiempo real. 

Paradigma: Programacion Funcional

- Definicion de un array de objetos con la estructura {id, total votos} para definir la estructura de la encuesta

- funcion Usuario que acepta nombre, apellido y opcion de voto. La funcion retorna un cambio a la opcion en votaciones2.

- Funcion Encuesta que acepta nombre encuesta y el array de objetos de la encuesta, regresa el total de votos aceptados

- En el programa Principal se crean 3 usuarios con sus respectivos nombres, apellidos y votos

- Los votos son registrados en la constante votaciones2 y se contabilizan los votos al final

fecha Entrega: 13 de Febrero 2024

*/



const votaciones2 = [
    { id: "Toyota", totalVotos: 0 },
    { id: "Nissan", totalVotos: 0 },
    { id: "Mazda", totalVotos: 0 },
  ];

function Usuario(nombre,apellido,opcion){
        const filteredResult = votaciones2.findIndex((e) => e.id == opcion);
        if(filteredResult== -1){
            console.log("--Voto Invalido")
        }
        else{
            console.log("--Voto Registrado---Gracias")
            votaciones2[filteredResult].totalVotos += 1
        }
}

function Encuesta(nombre_Encuesta, votaciones){
    //constructor(nombre_Encuesta, opc1, opc2, opc3){
        this.Titulo_Encuesta=nombre_Encuesta
        this.votacion = votaciones
        let total = this.votacion.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.totalVotos;
          }, 0);
        return total
    }


Encuesta("Carros",votaciones2)
Usuario("arturo","Y","Mazda")
Usuario("juan carlos","Y","Toyota")
Usuario("roberto","Y","Mazda")
console.log(votaciones2)