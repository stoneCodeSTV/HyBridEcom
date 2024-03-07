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

test; 