import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./db.mjs";
import authRouter from "./routes/authRoutes.mjs"
import cookieParser from 'cookie-parser'


dotenv.config();

const app=express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

//const PORT=Number(process.env.PORT ?? 5000);
const PORT=process.env.PORT || 5000

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

app.use('/api/auth', authRouter)

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