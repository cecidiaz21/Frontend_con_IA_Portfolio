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
    

    let productos = [
        {nombre: "Manzana", precio:1.2, cantidad:10},
        {nombre: "Platano", precio: 0.8, cantidad:15},
        {nombre: "Cereal", precio: 3.5, cantidad:2},
    ];

    //Funcion Agregar Producto
    function agregarProducto(nombre, precio, cantidad) { //hay que colocar los parametros en el mismo orden que fueron definidos, en cada uno va a recibir datos de acuerdo a si es string o numero
        productos.push({nombre:"Kiwi", precio: 5000, cantidad: 4});
        console.log("Producto agregado: " + nombre);
    }

