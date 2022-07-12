import express from 'express';
import otprouter from './Otp_Generation/router'
const router=express.Router();
router.use('/:entity(Otp_Generation)', otprouter)
export default router
    