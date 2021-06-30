const mongoose = require('mongoose')

require('../models/user')
require('../models/rent')

const uri = 'mongodb://localhost:27017/rentproDB';

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open',()=>{
    console.log("Connection has been established");
    })
    
    mongoose.connection.on("error",()=>{
        console.log(err.message);
    })