import express from "express";
import path from "path";
import { createServer } from 'node:http';


const app = express();
const PORT = 8000;
import {Server} from "socket.io";



//using middlewares 
app.use(express.static(path.resolve("./public")));


const server = createServer(app);
const io = new Server(server);




app.get("/",(req,res)=>{
    res.sendFile("/public/index.html") ;
})
//socket io

io.on('connection' , (socket) =>{
 console.log('a new user has connected ');
});



server.listen(PORT,()=> console.log(`Server Running on port : ${PORT} `));
