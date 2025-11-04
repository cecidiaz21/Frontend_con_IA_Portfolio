//Actividad práctica Clase 3 JS
const persona = {
    nombre : "Juan",
    edad: 25,
    saludar: function () {
        return "Hola, " + this.nombre;
    }
};
    console.log(persona.saludar());


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

    let productos = [
        {nombre: "Manzana", precio:1.2, cantidad:10},
        {nombre: "Platano", precio: 0.8, cantidad:15},
        {nombre: "Cereal", precio: 3.5, cantidad:2},
    ];

    //Funcion Agregar Producto
    function agregarProducto(nombre, precio, cantidad) { //hay que colocar los parametros en el mismo orden que fueron definidos, en cada uno va a recibir datos de acuerdo a si es string o numero
        productos.push({nombre: Kiwi, precio: 5000, cantidad: 4});
        console.log("Producto agregado: " + nombre);
    }

