const express = require("express");

const Book = require("../models/book.models");

const router = express.Router();

router.post('/books', async(req,res)=>{
    try {
        const book = await Book.create(req.body);
        return res.status(201).send({book:book});
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports = router;
