/*Las clases se agregaron en la última versión de JavaScript (llamada ECMAScript 6 o simplemente ES6). Es algo similar a cómo funcionan las clases en otros lenguajes (Java, Ruby, etc.). Este es un concepto muy importante en programación, por lo que tarde o temprano querrá aprender sobre él. (Y te recomiendo encarecidamente que lo hagas antes que los módulos de Java).


Crea una clase de coche:

1) Agregue propiedades como modelo, para que pueda crear un "Ford" con el modelo "Mondeo". Agregue las propiedades que desee en el método constructor.
2) Agrega un método para acelerar
3) Agregue un método para detener
4) Agregue un método de direcciones de giro
5) Agregue un estado de llamada de método para mostrar la información del automóvil (propiedades, métodos, etc.)

Instancia al menos 2.

*/
/**
 * class notation
 */

class CreateCoche {
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
    //métodos
    acelerar(){
        return `${this.marca} acelera`;
    }

    detener(alto) {
        return `${this.marca} se detiene con ${"alto"}`;
    }

    dirección(giro) {
        return `${this.marca} va hacia la derecha e izquierda con un ${"giro"}`;
    }

}

const Ford = new CreateCoche("Ford", "Mondeo")
console.log(Ford)
console.log(Ford.acelerar())
console.log(Ford.detener())
console.log(Ford.dirección())
