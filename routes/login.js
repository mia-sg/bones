const router = require('express').Router();
const {app} = require('apico/server.js');

const mysql = require('mysql2');

// add routes

router.get('/', async(req, res)=>{
    res.json({'Message': 'login works'});
});

app.use('/auth/login', router);