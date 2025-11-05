/*Actividad práctica Clase 3 JS
const persona = {
    nombre : "Juan",
    edad: 25,
    saludar: function () {
        return "Hola, " + this.nombre;
    }
};
    console.log(persona.saludar());
*/

    /*Palabras reservadas:
    let: Se utiliza para variables cuyo valor puede cambiar.
    var: Se utiliza en versiones antiguas de JavaScript, pero no es recomendable debido a su comportamiento global.
    const: no puede cambiar la informacion 
    =: asignacion
    ==: comparacion de valor
    ===: compracion de valor y tipo
    [: indica que hay un array (arreglo, matriz, vector)
    ;: termina una instrucción
    ,: indica mas elementos, mas tareas, a continuacion
    */

    
    const frutas = ["Manzana", "Banana", "Pera", "Manzana"];
    console.log('Frutas: ', frutas);

    //Funcion Agregar elemento de frutas: forma mas sencilla 
    frutas.push('Naranja');
    console.log('Después de agregar Naranja: ', frutas);

    //Funcion Eliminar elemento de frutas: forma mas sencilla 
    frutas.pop('Naranja'); //sino no pones el nombre elimina directamente el último elemento
    console.log('Después de sacar Naranja: ', frutas);

    frutas.shift(); //sino no pones el nombre elimina directamente el primero elemento
    console.log('Borra el primer elemento de la lista: ', frutas); //posicion 0 CERO

    frutas.forEach((fruta, indice) => { //para buscar el indice de nuestra lista
        console.log(`Fruta en el índice ${indice}: ${fruta}`); //para concatenar con $ se deben usar `
    }); 
    
    frutas.forEach((fruta, indice) => { //para buscar el indice de nuestra lista
        console.log("Fruta en el "+ indice +": " + fruta); //para concatenar con + se deben usar ""
    }); 

    frutas.filter(fruta => fruta.startsWith('P')).forEach(fruta =>{
        console.log('Fruta que empieza con P: ', fruta);
    })

    frutas.unshift('Fresa');
    console.log('Después de agregar Fresa al inicio ', frutas);

    frutas.map((fruta, indice)=> {
        console.log(`Fruta en el índice ${indice} con map: ${fruta}`); //para concatenar con $ se deben usar `
    }); 

    frutas.reduce((acumulador, fruta)=> {
        console.log('Acumulador:', acumulador, 'Fruta actual: ', fruta);
        return acumulador + ', ' + fruta;
    }, '');
    

    /*let productos = [
        {nombre: "Manzana", precio:1.2, cantidad:10},
        {nombre: "Platano", precio: 0.8, cantidad:15},
        {nombre: "Cereal", precio: 3.5, cantidad:2},
    ];

    //Funcion Agregar Producto
    function agregarProducto(nombre, precio, cantidad) { //hay que colocar los parametros en el mismo orden que fueron definidos, en cada uno va a recibir datos de acuerdo a si es string o numero
        productos.push({nombre:"Kiwi", precio: 5000, cantidad: 4});
        console.log("Producto agregado: " + nombre);
    }*/

//Ejercicios:
//1-Crea un arreglo con 5 números y muestra el tercero en consola.
let numeros = [4, 8, 15, 16, 23];
console.log('El arreglo de 5 números es: ', numeros);
console.log('Tercer número del arreglo: ', numeros[2]);

//2-Agrega un nuevo elemento a un arreglo usando push.
numeros.push(22);
console.log('Numeros con un nuevo elemento: ', numeros);

//3-Elimina el último elemento de un arreglo y muéstralo en consola.
numeros.pop();
console.log('Numeros sin el último elemento: ', numeros);

//4-Usa map para multiplicar por 2 cada número de un arreglo.
//Declaro un nuevo let para hacer un nuevo array con el mapeo
let nuevosNumeros = numeros.map((elemento) => elemento * 2);
console.log("Nuevo array de números con cada uno de sus elementos duplicados: ", nuevosNumeros);

//5-Filtra un arreglo para obtener solo los números mayores a 10.
   numeros.filter(elemento => elemento > 10).forEach(elemento => {
    console.log('Elemento mayor a 10: ', elemento);
});

//6-Declara un objeto con las propiedades nombre, edad, y profesión.
let persona = {
    nombre : "Juan",
    edad: 25,
    profesion: "estudiante"
    };
console.log(persona)

//7-Accede y muestra el valor de una propiedad de un objeto.
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

//8-Agrega un método a un objeto que devuelva un saludo personalizado.
console.log("Buenos dias Sr. "+ (persona.nombre));

/*persona.push(saludar: function () {
        return "Hola, " + this.nombre;
    });
    console.log(persona.saludar());  no puedo usar pushi xq persona no esta declarada como array tengo q usar*/

persona.saludar = function () {
    return "Hola, " + this.nombre;
};
console.log(persona.saludar());  // se debe usar una asignacion directa


//9-Usa reduce para sumar todos los números de un arreglo.
let suma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
    console.log('Suma total de los números:', suma);

//10-Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Carlos", edad: 35 }
]; //creamos un array con obejtos, cada uno tiene nombre y edad como propiedades

personas.forEach(persona => {
    console.log('Nombre en array personas:', persona.nombre);
}); //forEach va a iterar a traves de cada objetvo y saca la propiedad nombre

personas.forEach(persona => {
    console.log('Edad:', persona.edad);
}); //forEach va a iterar a traves de cada objetvo y saca la propiedad edad (atributo?)


