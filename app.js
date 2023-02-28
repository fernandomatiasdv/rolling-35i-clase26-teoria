const direccion = "Av. Balbin 1729 1A"

const direccion_casa /* Nombre del objeto => Object literal */ = {
    nombreAvenida : "Av Balbin", // string  // Propiedades / Properties
    numeroCasa : 1729,  // number
    departamento: "1A" // string
}

console.log(direccion_casa)

// Notación de punto => Acceder a cada una de las propiedades a partir del objeto literal
console.log(direccion_casa.nombreAvenida)
console.log(direccion_casa.numeroCasa)
console.log(direccion_casa.departamento)

console.log(`${direccion_casa.nombreAvenida} ${direccion_casa.numeroCasa} ${direccion_casa.departamento}`)

// ES6+
// Destructuring: Se llama a las propiedades del objeto generando una constante por cada propiedad con el mismo nombre
const  { nombreAvenida,  numeroCasa }   = direccion_casa
console.log(`${nombreAvenida} ${numeroCasa} `)


const objetoVacio = {}

console.log(typeof objetoVacio) 

