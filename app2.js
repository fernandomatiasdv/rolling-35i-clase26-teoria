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

console.log(jefe.direccion[0].departamento)
console.log(jefe.direccion[1])

console.log(jefe["puesto"])


