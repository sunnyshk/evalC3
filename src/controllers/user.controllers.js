const express = require('express');

const User = require('../models/user.models');

const router = express.Router();

router.post('/users', async(req,res)=>{
    try {
        const user = await User.create(req.body);
        return res.status(201).send({user:user});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

module.exports = router;