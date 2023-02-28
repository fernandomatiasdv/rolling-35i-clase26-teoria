/*
// Typeof:
falsy: null / undefined / 0 
truthy : 
    string / boolean / number => Primitivos
    Object 
    
    const nombre = "Pochi" // string
    console.log(typeof nombre)
    const numero = 5
    console.log(typeof numero) // number
    const verdadero = true
    console.log(typeof verdadero) // boolean 
*/



const direccion_casa /* Nombre del objeto => Object literal */ = {
    nombreAvenida : "Av Balbin", // string  // Propiedades / Properties
    numeroCasa : 1729,  // number
    departamento: "1A" // string
}

const direccion_laboral /* Nombre del objeto => Object literal */ = {
    nombreAvenida : "Av Mitre", // string  // Propiedades / Properties
    numeroCasa : 113,  // number
    departamento: "8F" // string
}


// Constructor
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

// Objetos creados a partir de un constructor:
const direccionNovia = new Direccion("Huspallata", 789, "9A")
const direccionVeterinario = new Direccion("Rawson", 9191, "2B")

console.log(direccionNovia.cambiaNombreAvenida("La Paz"))

/*console.log(direccionVeterinario.numeroDeLaCasa())
console.log(direccionNovia.departamento)

console.log(direccionNovia.direccionCompleta())
//console.log(direccionVeterinario)
*/




const nombreEmpleado = "Ramiro"

const empleado = {
    nombre : nombreEmpleado,
    puesto :"Programador",
    casa: direccion_casa,
    laburo: {
        nombreAvenida : "Av Mitre", // string  // Propiedades / Properties
        numeroCasa : 113,  // number
        departamento: "8F" // string
    }
}

const jefe = {
    nombre : "Hector",
    puesto :"Jefe",
    direccion: [ direccion_laboral, direccion_casa]
}
/*
console.log(jefe.direccion[0].departamento)
console.log(jefe.direccion[1])

console.log(jefe["puesto"])
*/





















