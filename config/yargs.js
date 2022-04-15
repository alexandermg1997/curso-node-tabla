const argv = require('yargs')
    .option('b', {
        alias: 'base',      // Alias
        type: 'number',     // Tipo de datos de ese alias
        demandOption: true,     // Define si es obligatorio ese alias
        default: '5',       // Valor por defecto en caso de no pasar niguno
        describe: 'Show base for multiplication'        // Descripción
    })
    .option('l', {
        alias: 'listar',      // Alias
        type: 'boolean',     // Tipo de datos de ese alias
        demandOption: true,     // Define si es obligatorio ese alias
        default: false,       // Valor por defecto en caso de no pasar niguno
        describe: 'Show tabla'        // Descripción
    })
    .option('h', {
        alias: 'hasta',      // Alias
        type: 'number',     // Tipo de datos de ese alias
        demandOption: true,     // Define si es obligatorio ese alias
        default: 10,       // Valor por defecto en caso de no pasar niguno
        describe: 'Show limited for multiplication'        // Descripción
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un número' // En caso de error 
        }
        if (isNaN(argv.listar)) {
            throw 'No se está pidiendo la lista' // En caso de error 
        }
        if (isNaN(argv.hasta)) {
            throw 'El límite tiene que ser un número' // En caso de error 
        }
        else {
            return true  //`La base es: ${argv.base}` // tell Yargs that the arguments passed the check
        }
    })
    .argv;

module.exports = argv;