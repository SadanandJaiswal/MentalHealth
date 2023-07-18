const connectDatabase = require('./config/database')
const app = require('./app')
const port = process.env.PORT || 4000;


connectDatabase();



const server = app.listen(port, () => {
    console.log(`Server listening on port no ${port}`);
});

