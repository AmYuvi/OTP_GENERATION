import express from 'express'
const router = express.Router()
import { otpgenerator } from './controller'
import { tokengenerator } from './controller'
import { decodegenerator } from './controller'
router.post("/contact", otpgenerator)
router.post("/contact/:Phone_Number", tokengenerator)
router.post("/contact1", decodegenerator)
export default router 
