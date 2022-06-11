var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const model =require('../models/index')
const {lembaga} = require('../models');
const {event} = require('../models');



router.get('/', async(req,res)=>{
    const Event = await event.findAll({
        where:{
            CategoryId:1
        }
    });
    return res.json({data:Event});
}) 

module.exports=router;