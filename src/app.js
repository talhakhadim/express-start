require('dotenv').config();
const express=require('express');
const rateLimit = require("express-rate-limit");
const cors=require('cors');
const compression=require('compression');
const helmet=require('helmet');
const morgan=require('morgan');
const errorHandler=require('./middleware/errorHandler');
const Routes=require('./routes');



const app=express();
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true,limit:'50mb'}));
app.use(cors({origin:"*"}));
app.use(compression());
//rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(helmet());
app.use(morgan('dev'));
//routes
app.use('/api',Routes);
app.use(errorHandler);

module.exports=app;