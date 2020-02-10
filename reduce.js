//TODO REDUCE
//*Permite ejecutar funciones reducer, recibe dos argumentos, el primero valor acumulado  y el segundo el evento que se itera del arreglo.


//función reducer
//const reducer = {acumulador, valorActual}=> nuevoAcumulador

//const reducido = [1 ,2].reduce((acc, el) => acc + el, 0);

//console.log(reducido);

const numeros = [1,2,3,4,5]

const resultado = numeros.reduce((acc, el)=> acc + el, 0);

// console.log(resultado);


const mascotas = [
    {nombre: "Pelusa",edad:12, tipo:"perro"},
    {nombre: "Puchini",edad:3, tipo:"perro"},
    {nombre: "Pulga",edad:10, tipo:"perro"},
    {nombre: "Chanchito feliz",edad:12, tipo:"gato"}
]

const indexed = mascotas.reduce((acc, el)=>({
    ...acc,
    [el.nombre]:el,
}),{})

//*Con redux, podemos indexar los elementos que se encuentran dentro de nuestro arreglo.
//console.log(indexed["Pelusa"]);

const anidado = [1,[2,3],4,[5]]

//Crear un arreglo plano sin anidaciones

const plano = anidado.reduce((acc, el)=> acc.concat(el),[])

console.log(plano);