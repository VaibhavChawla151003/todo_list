const mongoose = require('mongoose')
const colors = require('colors')
const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true})
        console.log(`Server running on ${mongoose.connection.host}`.bgCyan.black);
    }
    catch (error){
       console.log(`${error}`.bgRed)
    }
};

module.exports = connectDb 