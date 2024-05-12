const {app} = require('apico/server.js');
const mysql = require('mysql2');

app.use(function(req, res, next){
    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'js7kJ9&%aj(andwuwNYI',
        database: 'bones'
    });

    pool.query(`SELECT * FROM posts`, function(err, posts, fields){
        if (err) throw err;
        console.log('Works', posts);
        res.locals.blogposts.all = posts;

        next();
        
    });
});