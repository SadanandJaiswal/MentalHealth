const express = require('express')
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const cors = require('cors')


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

const routes = require('./routes/routes')


app.use('/', routes);
app.use(express.static(path.join(__dirname,"../frontend")));

app.get('*',(req,res)=>{
    res.send(`<h1>Page not Found, Error 404</h1>`);
})

module.exports = app;
