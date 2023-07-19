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
// app.use(cors({ origin:'https://jeevanbandhu.netlify.app', credentials:true }));
// app.use(cors({origin:"*", credentials:true}));

let origin ;
app.use((req,res,next)=>{
    origin = req.headers.origin;
    console.log('origin is ',origin);
})

// const allowedOrigins = ['http://localhost', 'https://jeevanbandhu.netlify.app'];

if(origin == "localhost")
{
    app.use(cors({
        origin: 'http://localhost',
        credentials:true
    }))
}
else{
    app.use(cors({
        origin: 'https://jeevanbandhu.netlify.app',
        credentials:true
    }))
}

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

// Enable CORS for all routes
// app.use(cors(corsOptions));


const routes = require('./routes/routes')


app.use('/', routes);
app.use(express.static(path.join(__dirname,"../frontend")));

app.get('*',(req,res)=>{
    res.send(`<h1>Page not Found, Error 404</h1>`);
})

module.exports = app;
