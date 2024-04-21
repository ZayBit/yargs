const argv = require('./yargs/yargs')

// console.log(argv);
const multiplicar = require('./helpers/multiplicar')

multiplicar({base: argv.b, listar: argv.l,max:argv.h}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})