//criou um servidor

// const http = require('http')

import {get, createServer} from 'http'

const HOST = 'localhost'
const PORT = 3333

const server = createServer((req, res)=> {
 res.end('oi! estou funcionando yurru')
})


server.listen(PORT, HOST, () => {
    console.log(`Servidor Rodando: http://${HOST}: ${PORT}/`);
})

get('/', ()=>{
    return 'Test'
})