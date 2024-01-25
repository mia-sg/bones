const { app } = require('apico/server.js');

app.use(function( req, res, next){
    next();
});