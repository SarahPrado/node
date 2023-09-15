//criou um servidor

const http = require('http')

const HOST = 'localhost'
const PORT = 3333

const server = http.createServer((req, res)=> {
 res.end('oi! estou funcionando yurru')
})


server.listen(PORT, HOST, () => {
    console.log(`Servidor Rodando: http://${HOST}: ${PORT}/`);
})