const express = require('express')
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const cors = require('cors');

const session = require('express-session');


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
    next();
})

app.use(
    session({
      secret: 'asdfghjk_{}|:<?,lqwer./;[123456789tyuiop0,!@#$%^&*()-=zxcvnm',
      cookie: {
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax',
        maxAge: 60*60*24*30,
        secure: process.env.NODE_ENV === "production",
      },
      resave: true,
      saveUninitialized: false,
      ttl: 60 * 60 * 24 * 30
    })
  );

// const allowedOrigins = ['http://localhost', 'https://jeevanbandhu.netlify.app'];

const allowOrigin = ['http://localhost:3000', 'https://jeevanbandhu.netlify.app' ];

app.use(cors({
    origin:allowOrigin, 
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials:true
}))

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
