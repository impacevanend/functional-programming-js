//TODO ARRAY.map
//*Transformar los elementos de un arreglo, genera una nueva copia.

//función de suma total
const suma = (ns) => {          
    let acumulado = 0;

    for (let i = 0; i < ns.length; i++) {
        
        acumulado += ns[i];
    }

    return  acumulado;
}

const numeros = [1,2,3,4,5];
// multiplicar * 2

const multiplicar = numeros.map( x => x * 2);

//console.log(multiplicar, numeros);

// a pares

//const parejas = numeros.map( x => [x, x]);
//console.log(parejas);


const mascotas = [
    {nombre: "Puchini",edad:12, tipo:"perro"},
    {nombre: "Chanchito feliz",edad:3, tipo:"perro"},
    {nombre: "Pulga",edad:10, tipo:"perro"},
    {nombre: "Pelusa",edad:12, tipo:"gato"}
]

//edad promedio

const edades = mascotas.map(x => x.edad);
const resultado = suma(edades);

console.log(resultado / edades.length);

//*Map tiene la misma longitud que el arreglo inicial, aplica la función a los elementos del arreglo.