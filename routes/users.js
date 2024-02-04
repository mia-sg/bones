const router = require('express').Router();
const {app} = require('apico/server.js');

router.post('/add', function(req, res){
    res.json({"message": "Ok"});
});

app.use('/add', router);