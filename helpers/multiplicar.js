const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log('=============================='.green);
            console.log('       Tabla del:'.green, colors.blue(base));
            console.log('=============================='.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}


// const crearArchivo = (base = 5) => {

//     return new Promise((res, req) => {

//         console.log('==============================');
//         console.log('       Tabla del:', base);
//         console.log('==============================');

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(`Tabla-${base}.txt`, salida);

//         res(`Tabla-${base}.txt`) ;
//     })
// }


