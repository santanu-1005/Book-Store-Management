const express = require('express');
const dotenv = require('dotenv').config();
const db = require('./config/dbConnection');
const bookRoute  = require('./routes/bookRoute');
const bodyParser = require('body-parser');

const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(logRequest);
app.use('/books', bookRoute)

app.listen(port, ()=>{
    console.log(`App is Listening oport: ${port}`);
});