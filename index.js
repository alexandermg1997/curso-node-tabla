
const { crearArchivo } = require('./helpers/multiplicar');  // Llamar una función de otro archivo
const argv = require ('./config/yargs');

require('colors');

console.clear();    // Limpiar la consola 

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchico => console.log(nombreArchico.rainbow, 'creado correctamente'))
    .catch(err => console.log(err))