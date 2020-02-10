const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [
    {nombre: "Puchini",edad:12, raza:"perro"},
    {nombre: "Chanchito feliz",edad:3, raza:"perro"},
    {nombre: "Pulga",edad:10, raza:"perro"},
    {nombre: "Pelusa",edad:16, raza:"gato"}
]


const numerosFiltrados = numeros.filter(x=> x < 5);

//*Filter mantiene todos los elementos, siempre y cuando la condición sea verdadera, generando un nuevo arreglo.

//*Filter es inmutable, no momificara los datos de origen.

//console.log(numerosFiltrados, numeros);


//*Filter() en objetos retorna el elemento completo.
const perros = mascotas.filter( x => x.raza == "perro");

const gatos = mascotas.filter( x => x.raza == "gato");


console.log(gatos);



