const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb');
//config .env file

dotenv.config();

//database call
connectDb();
//rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get("/",(req,res) =>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("API is running..");
})

//user routes
app.use('/api/v1/users',require('./routes/userRoute'));

//tasks routes
app.use('/api/v1/tasks',require('./routes/taskRoutes'));

//port
const PORT = process.env.PORT ||8080;

//listen server

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})