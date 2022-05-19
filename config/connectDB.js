// 1 require mongoose
const mongoose = require ("mongoose")
// 2 connect database
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.URI);
        console.log('Database connected!!')
    } catch (error) {
        console.log('Failed connection to database !!', error)
        
    }
}

module.exports=connectDB