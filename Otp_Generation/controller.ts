import { Otp_Model } from "./model"
import { PesonalModel } from './model'
import jwt from "jsonwebtoken"
import { RequestHandler } from "express"
import { decode } from "punycode"

export const otpgenerator: RequestHandler = async (req, res) => {
    const number = Number(100000 + Math.random() * 900000)
    req.body.otp = Math.floor(number)
    var time = new Date();
    console.log(time)
    time.setMinutes(time.getMinutes() + 5);
    console.log(time)
    // const withoutExtra = new Date().getTime()
    // await otp
    // const obj = {
    //     mobile_number: req.body.mobile_number,
    //     otp: otp1,
    //     created_date: time
    // }
    //const mobile_number=req.body.mobile_number
    // req.body.otp=otp1
    //const data = new Model(obj)
    req.body.Expiry_time = time
    const data = new Otp_Model(req.body)
    await data.save()
    console.log(data)
    res.send(req.body)
}

export const tokengenerator: RequestHandler = async (req, res) => {
    const found = await Otp_Model.findOne({ Phone_Number: req.params.Phone_Number, otp: req.body.otp })
    var date = new Date
    if (found) {
        var created_date: any = (found.Expiry_time)
        if (date <= created_date) {
            var token = jwt.sign({ Phone_Number: req.params.Phone_Number }, 'yuvi')
            console.log(token)
            res.send(token)
        }
        else {
            console.log("otp is expired")
            res.send("otp is expired")
        }
    }
    else {
        res.send("NO DATA FOUND FIRST GENERATE OTP FOR YOUR PHONE NUMBER")
    }
}

export const decodegenerator: RequestHandler = async (req, res) => {
    let token: any = req.headers.authorization
    if (token) {
        var decoded: any = jwt.verify(token, 'yuvi')
        let number = Number(decoded.Phone_Number)
        console.log(number)
        req.body.Phone_Number = number
        const data = new PesonalModel(req.body)
        await data.save()
        console.log(req.body)
        res.send(req.body)
    }

}