const express = require('express');
const mongoose = require('mongoose');
const Details = require('./model');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://venkat:ramana123@cluster0.hyndn7t.mongodb.net/").then(() => console.log("DB is connected")).catch((err) =>console.log(err.message));

app.post("/register",async (req,res) =>{
    const {userName,userEmail} = req.body;
    try{
        const newData = new Details({name:userName,email:userEmail});
        await newData.save();
        return res.json(await Details.find());
    }
    catch(error){
        console.log(error.message);
    }
    
})

app.listen(3009,() =>{
    console.log("App is listening at 3009");

})
