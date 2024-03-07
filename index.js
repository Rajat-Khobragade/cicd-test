const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send({message:"Home route"})
})




app.listen(5000,()=>{
    console.log("Server running")
})