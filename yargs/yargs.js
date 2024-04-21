
const colors = require('colors');

const argv = require('yargs')
.options({
    'b':{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
    },
    'l':{
        alias:'listar',
        type:'boolean',
        demandOption:false,
        describe: 'Muestra la tabla en consola como vista previa'
    },
    'h':{
        alias:'hasta',
        type:'number',
        demandOption:false,
        describe: 'Maximo numero en la talba, Por defecto 10'
    }
}).check((argv,option)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero'.underline.red
    }
    if(argv.h){
        if(isNaN(argv.h)){
            throw 'la cantidad maxima tiene que ser un numero'.underline.red
        }
    }
    if(argv.l){
        if(typeof argv.l != 'boolean'){
            throw 'Solo se permiten numero booleanos'.underline.red
        }
    }

    // si no hay nungun error entonces retornamos un true
    return true
}).argv


module.exports = argv