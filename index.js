import express from "express";

const app = express();
const PORT = 8000;

//using middlewares 

app.use(express.static("/public"));

app.get("/",(req,res)=>{
    res.end("Server Home Page BRo!") ;
})

app.listen(PORT,()=> console.log(`Server Running on port : ${PORT} `));
