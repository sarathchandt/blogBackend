import {} from 'dotenv/config'
import path from "path"
import db from './dataBase/dataBase.js'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()

import userRoutes from './routes/userRouter.js'


db.connect()


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

app.use('/', userRoutes);


app.listen(4000,()=>{ 
    console.log('conected:4000');
})