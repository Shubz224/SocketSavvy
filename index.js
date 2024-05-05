import express from "express";
import path from "path";
const app = express();
const PORT = 8000;

//using middlewares 

app.use(express.static(path.resolve("./public")));


app.get("/",(req,res)=>{
    res.sendFile("/public/index.html") ;
})

app.listen(PORT,()=> console.log(`Server Running on port : ${PORT} `));
