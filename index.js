import express from "express";
const app=express();
const port=3000;
console.log("This is me testing jenkins");
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})
