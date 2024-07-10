const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const mongoUrl = process.env.URL;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDb server');
});

db.on('error', (err)=>{
    console.error('Mongodb connection error', err);
});

db.on('disconnected',()=>{
    console.log('MongoDb disconnected');
});

module.exports = db;