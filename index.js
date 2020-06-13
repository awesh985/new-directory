
const express = require('express');
const app = express();
app.use(express.json());
const ROUTER = require('./route/routes');



app.use('/',ROUTER)
const port =process.env.AWESH || 3000;
app.listen(port,() => console.log('linstening on port ${AWESH}...')) ;
