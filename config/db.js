const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Mongodb Database Error ${error}`.bgRed.white)
    }
}    
module.exports = connectDB;