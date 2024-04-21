const empleados = [
    {
        id:1,
        nombre:'gustabo'
    },
    {
        id:2,
        nombre:'gonzalo'
    },
    {
        id:3,
        nombre:'francisco'
    },
    {
        id:4,
        nombre:'Elizabeth'
    }
]

const salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:1500
    },
    {
        id:3,
        salario:2200
    }
]

const getEmpleado = (id)=>{

    return new Promise( ( resolve, reject )=>{
        const empleado = empleados.find(e=>e.id == id)?.nombre


        if( empleado ){
            // devolver para con THEN ( entonces )
            resolve( empleado )
        }else{
            // devolver para manejarlo con CATCH ( atrapar )
            reject('No existe empleado con el id ',id)
        }
    } )

}


const getSalario = (id)=>{

    return new Promise( ( resolve, reject )=>{
        const salario = salarios.find(s=>s.id == id)?.salario

        // simplificar condicional


        if( salario ){
            // devolver para con THEN ( entonces )
            resolve( salario )
        }else{
            // devolver para manejarlo con CATCH ( atrapar )
            reject('No existe empleado con el id ',id)
        }

    } )

}

getEmpleado(3)
    .then(empleado=>{
        console.log(empleado);
    })
    // si no se maneja el error asi entonces por consecuencia se mostrara un error mas grande en consola
    .catch(err => console.log(err))

    getSalario(3)
    .then(salario=>{
        console.log(salario);
    })
    .catch(err => console.log(err))