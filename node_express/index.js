// const express= require("express");
import  express  from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {moviesRouter} from "./routes/movies.js";
import {userRouter} from "./routes/user.js"
import cors from "cors"
dotenv.config();

// .env enviranmental variables
console.log(process.env.MONGO_URL);
const app= express();
 
const PORT=process.env.PORT;
app.use(cors());
app.use(express.json());

// const MONGO_URL="mongodb://localhost"
const MONGO_URL= process.env.MONGO_URL;

app.get("/",function(req,res){
    res.send("this is home")});

   async function CreateConnection(){
    const Client= new MongoClient(MONGO_URL);
    await Client.connect();
    console.log("mongodb is connected 😍");
    return Client;
   }
  export const Client= await CreateConnection();

app.use("/movies",moviesRouter);
app.use("/user",userRouter);

app.listen(PORT,()=>console.log(`App started in ${PORT}`));



