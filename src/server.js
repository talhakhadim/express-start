require('dotenv').config();
const express=require('express');
const rateLimit = require("express-rate-limit");
const cors=require('cors');



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    // origin: process.env.CLIENT_URL
    origin:"*"
}));
//rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);



const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});