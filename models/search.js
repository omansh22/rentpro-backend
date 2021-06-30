const mongoose = require('mongoose')

const searchSchema = new mongoose.Schema({
    city:{
        type: String
    },
    locality: {
      type: String
    },
    tenant: {
        type: String,
        required: true
    }
    ,bhk: {
        type: Number,
        required: true
    }
    ,movingdate: {
        type: Date,
        required: true
    }
})

mongoose.model('Search')