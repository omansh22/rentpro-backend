const mongoose = require('mongoose');

const Rent = mongoose.model('Rent');

const add = (req, res, next) => {
    const data = req.body;
    Rent.
        create(data)
        .then(
            res.status(201).json("Successfully added")
        )

}
const search = (req, res, next) => {
    const data = req.body;
    Rent.
        find({
            "city": data.city,
            "area": data.locality,
            "dates.available": { $lte: data.movein },
            "type": data.bhk,
            "property": data.property

        })
        .then(response => {
            res.status(200).json(response)
        })
}

const filter = (req, res, next) => {
    const data = req.body;
    //console.log(data);
    Rent
        .find({
            "type": data.bhk,
            "price.rent": {
                $lte: data.price
            },
            "property": data.property
            ,
            "dates.available": { $lte: data.movein },
            "furnished": data.furnished

        })
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err.message);
        })
}

const getrentbyId = (req, res, next) => {
    const id = req.params.id;
    Rent.
        find({
            "_id": id
        })
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(err => {
            console.log(err.message);
        })

}

const increasing = (req, res, next) => {
    const data = req.body;
    console.log(data);
    Rent
    .find({
      "type": data.bhk,
      "price.rent": {
        $lte: data.price  
      },
      "property": data.property
      ,
      "dates.available":{ $lte: data.movein},
      "furnished": data.furnished

    }).sort({"price.rent": 1 })
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        console.log(err.message);
    })
}
const decreasing = (req, res, next) => {
    console.log('hi');
    const data = req.body;
    console.log(data);
    Rent
    .find({
      "type": data.bhk,
      "price.rent": {
        $lte: data.price  
      },
      "property": data.property
      ,
      "dates.available":{ $lte: data.movein},
      "furnished": data.furnished

    }).sort({"price.rent": -1 })
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        console.log(err.message);
    })

}

module.exports = {
    search,
    add,
    filter,
    getrentbyId,
    increasing,
    decreasing
}