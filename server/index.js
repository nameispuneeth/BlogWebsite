const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/:name",(req,res)=>{
    res.send(`Routing To ${req.params.name} Page ......`);
})

app.listen(8000,()=>{
    console.log("PORT IS RUNNING AT http://localhost:8000")
})