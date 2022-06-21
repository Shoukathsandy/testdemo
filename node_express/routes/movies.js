import express from "express";
import {auth} from "../middileware/auth.js";
import { getmoviebyid, getallmovies, createnewmovie, deletemoviebyid, updatemoviebyid } from "./helper.js";

const router= express.Router();

router.get("/:id",async function(req,res){
    console.log(req.params); 
      const {id}= req.params;
      const movie=  await getmoviebyid(id);
     movie ? res.send(movie) : res.status(404).send("match not found")
  });
  router.get("/",async function(req,res){
      // curser is pagination
      // toArray convert the curser as array
  
      const movies= await getallmovies();
  
  res.send(movies);
  })
  router.post("/", async function(req,res){
      const data=req.body;
      console.log(data);
     const result=await createnewmovie(data);
     res.send(result);
    });
  
    router.delete("/:id",async function(req,res){
      console.log(req.params); 
        const {id}= req.params;
        const movie=  await deletemoviebyid(id);
       movie.deletedCount>0 ? res.send(movie) : res.status(404).send("match not found")
    });
  
    router.put("/:id", async function(req,res){
      const data=req.body;
      const {id}= req.params;
      console.log(data);
     const result=await updatemoviebyid(id, data);
     res.send(result);
    });

    export const moviesRouter = router;


