const persona = {
    nombre : "Juan",
    edad: 25,
    saludar: function () {
        return "Hola, " + this.nombre;
    }
};
    console.log(persona.saludar());
