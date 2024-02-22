//API Documentation
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from 'swagger-jsdoc';
//packages import
// const express= require('express');
import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
//security packages
import halmet from 'helmet';
import xss from 'xss-clean';
//fles import
import connectDB from './Config/db.js';
//import routes
import testRoutes from './Routes/testRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import errorMiddleware from './Middleware/errorMiddleware.js';
import userRoutes from './Routes/userRoutes.js';
import jobRoutes from './Routes/jobRoute.js';

//dot env config
dotenv.config();

//mongodb connection
connectDB();


//swagger api config
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:'Job portal Application',
            description:'Node Express JS job Portal Application'
        },
        servers:[{
            url:"http/localhost:8080"
        }]
    },
    apis: ['./Routes/*.js']
}

const spec =swaggerDoc(options)
//rest object 
const app= express();

//middleware
app.use(halmet());
app.use(xss());
app.use(express.json());


//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/job',jobRoutes);


//home route root
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(spec));
//validation middleware
app.use(errorMiddleware);


//port
const port= process.env.PORT || 8080;



app.listen(port,()=>{
    console.log(`server is running port number ${port}`);
})