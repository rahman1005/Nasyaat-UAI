var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { event } = require('../models')
const v = new Validator();

router.get('/', async(req,res)=>{
    const Events = await event.findAll();
    return res.json(Events);
});

router.post('/', async(req, res) => {
    const schema ={
        nameEvent: 'string',
        waktu: 'string',
        link_pendaftaran:'string',
        deskripsi:'string',
        Image:'string',
        lembagaId:'number',
        categoryId:'number',
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }
    // res.send('ok');
    const Event = await event.create(req.body);
    res.json(Event);
});

module.exports=router;