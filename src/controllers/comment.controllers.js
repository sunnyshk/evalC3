const express = require('express');

const Comment = require('../models/comment.models');

const router = express.Router();

router.post('/comments', async(req,res)=>{
    try {
        const comment = await Comment.create(req.body);
        return res.status(201).send({comment:comment}); 
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports = router;