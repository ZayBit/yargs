
const multiplicar = async( config )=>{
    console.clear()
    const colors = require('colors');
    const { base = 2 , max = 10, listar = false } = config
    try{

    const fs = require('fs')

    console.log(`=== TABLA DEL ${base} ===`.brightGreen)

    let result = ''
    for(let i = 0; i < max; i++){
        result += `${base} x ${i+1} = ${(i+1) * base}\n`
    }
    
    if(listar){
        console.log(`${result}`.cyan);
    }
        fs.writeFileSync(`tabla-${base}.txt`,result)
       return `La tabla del ${base} fue creada correctamente!.`.green
    }catch(err){
        // reject('Hay un problema al crear la tabla del ',base)
        throw err
    }

}

module.exports = multiplicar