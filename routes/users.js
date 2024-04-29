const router = require('express').Router();
const {app} = require('apico/server.js');

const mysql = require('mysql2');

router.get('/', async(req, res)=>{
    res.json({"message": "Users works"});
});

router.post('/add', function(req, res){
    res.json({"message": "Ok"});
});

app.use('/users', router);