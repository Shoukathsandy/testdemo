import { useState } from "react";
// import {Routes,Route,} from "react-router-dom";

import "./App.css";
import { Movie } from "./Movie";

export default function App(){
    const initialmovielist=[
        {
          id: "100",
          name: "Nanban",
          poster:"https://4.bp.blogspot.com/-Kn8T6rn2oeM/Tq_2cI1adAI/AAAAAAAAA-0/kTTh_Fzq5kg/s1600/Nanban+Movie+Photos%252CVijay+ileana+Pics%252Cvijay+new+look+Tamil+Movie+Latest+Stills+%25284%2529.jpg",
          rating: 8.8,
          summary:
            "Two friends set out to find a third friend from engineering college, who taught them how to be more than just victims of circumstances. During the journey, they recall their college memories."
        },
        {
          id: "101",
          name: "Inidhu Inidhu",
          poster:
            "http://3.bp.blogspot.com/_kLvzpyZm7zM/TFTkBYhPMFI/AAAAAAAAT9k/pun2Ij6cFPo/s1600/inidhu_inidhu_movie_posters_wallpapers_03.jpg",
          rating: 7.3,
          summary:
            "A group of new students in a prestigious college form a close friendship after being teased by their seniors. As time goes by, many of them form romantic feelings for each other."
        },
        {
          id: "102",
          name: "Kalloori",
          poster:
            "https://i.scdn.co/image/ab67616d0000b2733f389c0eee528825305675a3",
          rating: 6.1,
          summary:
            "Shobana is depressed and dislikes her new college. Things become better when she befriends her classmates who belong to different strata of society during a bus journey.",
        },
        {
          id: "103",
          name: "Natpae Thunai",
          poster:
            "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Natpe_Thunai.jpg/220px-Natpe_Thunai.jpg",
          summary:
            "Prabhakaran, a former hockey player, helps a local team save their ground by training them to win a match against the Pondicherry team. However, a corrupt politician has his eyes set on the ground.",
          rating: 8.8
           
        },
        {
          id: "104",
          name: "Jai Bhim",
          rating: 8.4,
          summary:
            "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
          poster:
            "https://timesofindia.indiatimes.com/thumb/87109980.cms?width=219&height=317&quality=80&imgsize=16050"
        },
        {
          id: "105",
          name: "Nerkonda Parvai",
          poster: "https://upload.wikimedia.org/wikipedia/en/3/30/Nerkonda_Paarvai_poster.jpg",
          rating: 8.6,
          summary:
            "A veteran lawyer comes out of retirement to help three women who have been falsely implicated in a criminal case. As he represents them in court, he faces powerful foes and patriarchal attitudes."
        },
        {
          id: "106",
          name: "Maatran",
          poster:
            "https://upload.wikimedia.org/wikipedia/en/6/60/Maattrraan_poster.jpg",
          rating: 6.8,
          summary:
            "A pair of conjoined twins strive to save their father's flourishing business from a spy. However, just before the spy is killed, they make a shocking revelation that may affect their lives forever."
        },
        
      ];
      const[movieList,setMovieList]=useState(initialmovielist);
      const [name,setName]=useState("");
      const [poster,setPoster]=useState("");  
      const [rating,setRating]=useState("");
      const [summary,setSummary]=useState("");
      return(
        
    <div className="App">
     
        <div className="add-movie-form">
        <input type="text" 
         placeholder="Name" 
        onChange={(event)=>setName(event.target.value)} 
          />
        <input type="text" 
        placeholder="Poster" 
        onChange={(event)=>setPoster(event.target.value)} 
        />
        <input type="text" 
        placeholder="Rating" 
        onChange={(event)=>setRating(event.target.value)} 
        /> 
        <input type="text" 
        placeholder="Summary"
        onChange={(event)=>setSummary(event.target.value)} 
        />
        <button onClick={()=>{
          const newMovie={
            name:name,
            poster:poster,
            rating:rating,
            summary:summary,
          };
          setMovieList([...movieList,newMovie]);
        }}>Add Movie</button>
        </div>
  <div className="movie-list">
    {movieList.map(({name,poster,rating,summary})=>(
    <Movie 
    name={name} 
    poster={poster}
    rating={rating} 
    summary={summary}/>
    ))}
   
    </div>
    </div>
 ); 
}


