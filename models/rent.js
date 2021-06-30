const mongoose = require('mongoose')

const rentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    builtup:{
        type: Number,
        required: true
    },
    price:{
    deposit: {
        type: Number,
        required: true
    },
    rent: {
        type: Number,
        required: true
    }
},
    tenent: {
        type: String,
        required: true
    },
    furnished: {
        type: String,
        required: true
    },
    gated: {
        type: String,
        required: true
    },
    water: {
        type: String,
        required: true
    }
    ,washroom:{
        type: Number
    }
    ,parking: {
        type: Boolean,
        required: true
    },
    property: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    dates:{
    post:{
        type: Date,
        default: Date.now
    },
    available:{
        type: Date,
        required: true
    }
},
    imageurl:[
        {type: String}]

})

mongoose.model("Rent",rentSchema);