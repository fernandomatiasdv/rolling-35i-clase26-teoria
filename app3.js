function Direccion(avenida, numero, depto ){
    this.nombreAvenida = avenida,
    this.numerocasa = numero,
    this.departamento = depto,
    // Método:
    this.direccionCompleta = function (){
        return(`${this.nombreAvenida} ${this.numerocasa} ${this.departamento}`)
    }
    // Getters: A los métodos que nos devuelven valores. Los parámetros están prohibidos
    this.numeroDeLaCasa = function (){
        return(this.numerocasa)
    }
    this.mostrarNombreAvenida = function () {
        return (this.nombreAvenida)
    }
    // Setters: A los métodos que modifican a las propiedades. Necesitamos de un parámetro
    this.cambiaNombreAvenida = function(nuevaAvenida){
        this.nombreAvenida = nuevaAvenida
        return(this.mostrarNombreAvenida())
    }
}

// ES6+ // class => Sugar sintax
class DireccionClass {
    constructor(avenida, numero, depto) {
        this.nombreAvenida = avenida,
        this.numerocasa = numero,
        this.departamento = depto
    }
    // Getters:
    get numeroDeLaCasa() { return(this.numerocasa)}
    get nombreDeLaAvenida() { return(this.nombreAvenida)}
    get mostrarDepartamento() { return(this.departamento)}

    // Setters:
    set cambiaNombreAvenida(nuevaAvenida) { this.nombreAvenida = nuevaAvenida }

}

const direccionNueva = new DireccionClass("Olavarria", 9876, "1A")
console.log(direccionNueva.nombreAvenida)
