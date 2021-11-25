const exp = require('constants');
const express = require('express');
const http = require('http');
const empresaRoutes = require('./api/routes/empresaRoutes.js');
const contasPagarRoutes = require('./api/routes/contasPagarRoutes.js')

const app = express();
app.set('porta', 3333);
app.set('url', 'http://localhost:');
app.use(express.json());
app.use(empresaRoutes);
app.use(contasPagarRoutes);


http.createServer(app).listen(app.get('porta'), function(){
    console.log('\nServidor rodando '+app.get('url')+ app.get('porta'))
})