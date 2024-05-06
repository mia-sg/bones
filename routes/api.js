const router = require('express').Router();
const { app } = require('apico/server.js');
/** Declare routes for Router */


router.get('/', async( req, res )=>{
    res.json({"message": "APi works"});
});


app.use( '/api', router );
