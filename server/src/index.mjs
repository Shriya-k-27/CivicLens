import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./db.mjs";
import User from "./models/User.mjs";

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());

const PORT=Number(process.env.PORT ?? 5000);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Civiclens says hello!"
    })
})

app.get('/api/health',(req,res)=>{
    res.status(200).json({
        status: "ok!"
    })
})

// app.get('/createuser', async (req,res)=>{
//     let createdUser= await User.create({
//         profile:"abcdef", role: "user", password:"abc@123", progress: "beginner"
//     })
//     res.status(201).json(createdUser);
// })

app.all('/*splat',(req,res)=>{
    res.status(404).json({
        message: "Route not found!",
        path: req.originalUrl,
        method: req.method
    });
})


// const server= app.listen(PORT,()=>{
//     console.log(`server listening on port ${PORT}`);
// })

// server.on('error',(err)=>{
//     console.log(err);
// })

const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`CivicLens Server listening on port ${PORT}`);
  });

  server.on("error", (err) => {
    console.error(err);
  });
};

startServer();