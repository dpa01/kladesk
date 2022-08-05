import express from "express";
import route from "./router/index.js";
import db from "./config/db.js";

const app = express()
const port = 5000;
 

const runServer = async ()=> {
    try {
        console.log(`Listen Port ${port}`);
        await db.authenticate();
        console.log("database connect");
    } catch (error) {
        console.log(error);
        
    }
}


app.use(route)


app.listen(port, ()=>{
    runServer();
})