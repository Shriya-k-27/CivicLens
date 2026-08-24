import app from './app.js';
import connectDB from "./config/db.js";
import dns from "node:dns/promises";
import "./jobs/newsJob.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT || 5000;

const startServer = async()=>{
    try{
        await connectDB();

        app.listen(PORT, ()=>{
            console.log(`Server is running in port ${PORT}`)
        })
    }
    catch(err){
        console.log("Database Connection failed:", err)
    }
}

startServer();