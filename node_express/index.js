// const express= require("express");
import  express  from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
// .env enviranmental variables
console.log(process.env.MONGO_URL);
const app= express();
const PORT=4000;
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
  const Client= await CreateConnection();

app.get("/movies/:id",async function(req,res){
  console.log(req.params); 
    const {id}= req.params;
    const movie=  await Client.db("B33WD").collection("movies").findOne({id:id});
   movie ? res.send(movie) : res.status(404).send("match not found")
});
app.get("/movies", async function(req,res){
    // curser is pagination
    // toArray convert the curser as array

    const movies= await Client.db("B33WD").collection("movies").find({}).toArray();

res.send(movies);
})
app.post("/movies", async function(req,res){
    const data=req.body;
    console.log(data);
   const result=await Client.db("B33WD").collection("movies").insertMany(data);
   res.send(result);
  });
app.listen(PORT,()=>console.log(`App started in ${PORT}`));
