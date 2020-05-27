const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sessionRoutes = require('./routes/session_routes');

const app = express();

app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() );

const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use( cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
})
)

app.use( session({
                    store  : new FileStore,
                    secret : '123456',
                    resave: false,
                    saveUninitialized: true,
                    name: 'joinjobs'
                })
)

app.use('/auth', sessionRoutes);

app.listen(8888, ()=>{ console.log('Escuchando desde el server...') } );