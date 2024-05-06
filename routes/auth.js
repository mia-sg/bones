const router = require('express').Router();
const {app} = require('apico/server.js');

const mysql = require('mysql2');

// add routes

router.post('/signup', async(req, res)=>{
    req.body;

    let sql = `INSERT into users(name, username, email, password)
                VALUES(?, ?, ?, ?)`;

    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'js7kJ9&%aj(andwuwNYI',
        database: 'bones'
    });

    pool.query(sql, [req.body.first_name, req.body.username, req.body.email, req.body.password], function(error, result){
        pool.end();

        res.json({message: 'Done', err: error, the_result: result});
    });
});

app.use('/auth', router);