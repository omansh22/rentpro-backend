require('./data/init')
const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors())

const authRouter = require('./routes/auth')
const rentRouter = require('./routes/rent')
app.use(express.json());

app.use('/auth',authRouter);
app.use('/rent',rentRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,error =>{
    if(error){
        return console.error(error.message)
    }
    console.log(`Server Started on https://localhost:${PORT}`);
})