const express = require('express');

const bodyparser = require('body-parser');

const cors = require('cors');

const router = require('./src/routes');

const app = express();

app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

app.use('/api',router);

app.listen(3002,()=>{
    console.log("ON");
});