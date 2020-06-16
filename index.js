const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const express = require('express');
const app = express();
app.use(express.json());
const ROUTER = require('./routes');
//mongodb+srv://abesh:abesh@cluster0-duuve.mongodb.net/registration?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://abesh:abesh@cluster0-duuve.mongodb.net/registration?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })





app.use('/',ROUTER);
const port =process.env.AWESH || 3000;
app.listen(port,() => console.log('linstening on port ${AWESH}...')) ;
