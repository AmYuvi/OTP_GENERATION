import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/OTP',()=>{
    console.log('Data base is connected')
})