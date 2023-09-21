//criou um servidor

// const http = require('http')

import {get, createServer} from 'http'

const HOST = 'localhost'
const PORT = 3333

const server = createServer((req, res)=> { 
 console.log(req.method);

 if(req.method === 'GET'){
    if(req.url === '/usuarios'){
        res.writeHead(200, {'Content-type':'text/plain'})
        res.end('Entrou no /usuarios')
    }else{
        res.end('oi! estou funcionando yurru')
    }
 }
})


server.listen(PORT, HOST, () => {
    console.log(`Servidor Rodando: http://${HOST}: ${PORT}/`);
})

// get('/', ()=>{
//     return 'Test'
// })