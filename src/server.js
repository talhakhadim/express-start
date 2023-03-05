require('dotenv').config();
const express=require('express');
const cors=require('cors');



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    // origin: process.env.CLIENT_URL
    origin:"*"
}));



const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});