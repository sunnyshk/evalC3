const express = require('express');

const app = require('./index');

const connect = require('./configs/db');

app.listen(5000, async()=>{
    try {
        await connect();
        console.log('Listening to port 5000')
    } catch (error) {
        console.error(error.message);
    }
});