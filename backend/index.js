const port = 4000; 
const express = require("express"); 
const mongoose = require ("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const app = express(); 
const path = require("path"); 
const cors = require("cors"); 

app.use(express.json()); 
app.use(cors());

//DB Connection with MongoDB 
mongoose.connect("mongodb+srv://omerta1:create.envfile@cluster0.7eduzss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


//API 

app.get( '/', (req,res) => {
    res.send('App is Running')
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on Port "+port);
    }
    else 
    {
        console.log("Error :"+error);
    }
})
