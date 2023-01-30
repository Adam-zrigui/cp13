import express from 'express';
import * as dotenv from 'dotenv';
import db from './config/db.js';
import getDB from './controller/getInfo.js';
import postDB from './controller/postInfo.js';
import deleteDB from './controller/deleteInfo.js';
import PutUserDB from './controller/updateInfo.js';
const app = express();
dotenv.config({path: './config/.env'})
db()

app.use(express.json())
app.get('/' , getDB)
app.put('/:id' , PutUserDB)
app.post('/postdb' , postDB)
app.delete('/:id' , deleteDB)
const PORT = process.env.PORT || 8000;
app.listen(PORT , (err) => err ? console.error(err) : console.log(`server running on port ${PORT}`));
