require('dotenv').config({path: '/.env'}); 
const mongoose = require('mongoose');

function connectToDb() {
    const uri = "mongodb+srv://ankit5646:Ankit5646@chai-code.iob4e.mongodb.net/";
    console.log(process.env.DB_CONNECT);
    
    if (!uri) {
        console.error('DB_CONNECT environment variable is not defined');
        return;
    }

    mongoose.connect(uri)
        .then(() => {
            console.log("Connected to database");
        }).catch(err => {
            console.error("Error connecting to database:", err.message);
            console.error("Stack trace:", err.stack);
        });
}

module.exports = connectToDb;