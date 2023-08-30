const express = require('express');
const cors = require('cors');

const stockRouter = require('./Router/stockRouter');
const assetsRouter = require('./Router/assetsRouter');

const PORT = 3001;
const app = express();

app.use(cors());

app.use('/stock',stockRouter);
app.use('/assets',assetsRouter);

const start = async() =>{
    try{
        app.listen(PORT,()=>{
            console.log(`server start on port ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start();