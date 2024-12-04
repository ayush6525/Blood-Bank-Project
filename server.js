const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db.js')
//dot config
dotenv.config();

//mongodb connection
connectDB();
// rest object
const app = express();


//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
// 1 test route
app.use('/api/v1/test', require("./routes/testRoutes.js"));
app.use('/api/v1/auth', require("./routes/authRoutes.js"));

// PORT
const PORT = process.env.PORT || 8080;

// LISTEN
app.listen(PORT, () => {
    console.log(
        `Node server Running In ${process.env.DEV_MODE} MOde On Port ${process.env.PORT}`
        .bgBlue.white
    );   
});