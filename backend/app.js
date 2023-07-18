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
app.use(cors({ origin: 'https://64b6e6b1b1e9ed0082596b13--jocular-queijadas-076081.netlify.app' }));


const routes = require('./routes/routes')


app.use('/', routes);
app.use(express.static(path.join(__dirname,"../frontend")));

app.get('*',(req,res)=>{
    res.send(`<h1>Page not Found, Error 404</h1>`);
})

module.exports = app;
