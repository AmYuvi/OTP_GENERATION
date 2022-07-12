import mongoose from 'mongoose'
const schema = new mongoose.Schema({
    Phone_Number: {
        type: Number
    },
    Expiry_time: {
        type: Date
    },
    otp: {
        type: Number
    }

})
export const Otp_Model = mongoose.model("OTP", schema)

const Schema = new mongoose.Schema({
    Name:{
        type:String
    },
    Age:{
        type:Number
    },
    Address:{
        type:String
    },
    Phone_Number:{
        type:Number
    }
})
export const PesonalModel = mongoose.model("Personal_Info", Schema)

