const dotenv = require('dotenv');
dotenv.config({path: "/.env"});
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db.js');
const userRoutes = require('./routes/user.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Welcome to my API!");
})


app.use('/users', userRoutes);

module.exports =app;
