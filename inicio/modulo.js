//A func require() importa módulos(são funções ou atributos) que podem ser utilizadas no código
//Mesmo que dizer: O require instancia o modulo para dentro de uma variável
//trazendo infos do SO

var os = require('os');

console.log('----Modulo: OS----\n');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log('Hostname: ', os.hostname()+'\n');
console.log('------------------\n');


var fs = require('fs');
console.log('----Modulo: FS----\n');

//MUDAR NOME DE PASTA
// fs.rename('test_novo.js', 'test.js', (err)=>{
//     if(err) {
//         console.log(err);
//     }
// })


// fs.readFile('test.js',(err, data)=>{
//     if(err) throw err;
//     console.log(`Conteúdo do arquivo: ${data}`);
// })

const data = fs.readFileSync('test.js').toString()
console.log(data);
console.log('------------------\n');

console.log('----Modulo: PATH----\n');
var path = require('path');

// console.log('Path', path.relative('modulo.js'));
console.log(fs.mkdirSync('inicio'));

console.log('------------------\n');
