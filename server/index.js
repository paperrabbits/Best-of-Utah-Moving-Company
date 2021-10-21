require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const auth = require('./authCtrl');

const app = express();
app.use(express.json());

app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        name: "BOUMsesh"
    })
);

// app.use();
// app.
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`⋰⋰⋱  ${SERVER_PORT}`)
    });
}).catch(err => console.log(err));


//  ENDPOINTS
app.post('api/login', auth.login);
app.post('api/register', auth.register);
app.get('api/logout', auth.logout);
