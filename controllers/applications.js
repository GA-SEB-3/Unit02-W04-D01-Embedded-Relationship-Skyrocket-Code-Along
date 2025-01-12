const express = require("express")
const router = express.Router()

const User = require('../models/user')

// ALl routes for application

router.get("/sara",(req,res)=>{
    res.send("sara route in application")
})

router.get("/",(req,res)=>{
    res.send("Hello applications index route")
})

module.exports = router