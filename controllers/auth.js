const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')
const User = mongoose.model('User')





const login=(req,res,next)=>{
    const user = req.body;
    if(!user){
        const error = new Error("login details are not sent in request body")
        next(error)
    }
    if( !user.email || !user.password ) {
        const error = new Error( 'Login details not sent in request body' );
        next( error );
        return;
    }
    User
    .findOne(user)
    .then(response=>{
        if(!response){
            const error = new Error("No match credentials")
            error.status = 404;
            next(error)
        }
        const claims = {
            name: user.name,
            email: user.email
        }
        jwt.sign(claims,"abcd",{expiresIn: 24*60*60},(err,token)=>{
            if(err){
                err.status = 500;
                return next(err);
            }
            res.json({
                email: user.email,
                token: token
            })
        })
    })

    .catch( err => {
        if( err.name === 'ValidationError' ) {
            err.status = 400;
        } else {
            err.status = 500;
        }

        return next( err );
    });

}

const register=(req,res,next)=>{
    const user = req.body;
    if(!user){
        const error = new Error('User details not sent in request body')
        next(error)
    }
    User
    .create(user)
    .then(updateduser=>{
        res.status(201).json(updateduser);
    })
    .catch( err=>{
        if( err.name === "ValidationError"){
            err.status = 400;
        }
        else{
            err.status = 500;
        }

        return next(err);
    })

}


module.exports={
    register,
    login
}