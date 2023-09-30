const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb');
const PORT = process.env.PORT;
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

//user routes
app.get('/', (req, res) => {
  res.json('server is Ok');
});

app.use('/api/users',require('./routes/userRoute'));

//tasks routes
app.use('/api/tasks',require('./routes/taskRoutes'));



//port


//listen server

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
