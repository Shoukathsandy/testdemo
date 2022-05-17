import {useState} from 'react';
import './App.css';

function App() {
  const initialmovielist=[
    {
      name: "Nanban",
      poster:"https://4.bp.blogspot.com/-Kn8T6rn2oeM/Tq_2cI1adAI/AAAAAAAAA-0/kTTh_Fzq5kg/s1600/Nanban+Movie+Photos%252CVijay+ileana+Pics%252Cvijay+new+look+Tamil+Movie+Latest+Stills+%25284%2529.jpg",
      rating: 8.8,
      summary:
        "Two friends set out to find a third friend from engineering college, who taught them how to be more than just victims of circumstances. During the journey, they recall their college memories."
    },
    {
      name: "Inidhu Inidhu",
      poster:
        "http://3.bp.blogspot.com/_kLvzpyZm7zM/TFTkBYhPMFI/AAAAAAAAT9k/pun2Ij6cFPo/s1600/inidhu_inidhu_movie_posters_wallpapers_03.jpg",
      rating: 7.3,
      summary:
        "A group of new students in a prestigious college form a close friendship after being teased by their seniors. As time goes by, many of them form romantic feelings for each other."
    },
    {
      name: "Kalloori",
      poster:
        "https://i.scdn.co/image/ab67616d0000b2733f389c0eee528825305675a3",
      rating: 6.1,
      summary:
        "Shobana is depressed and dislikes her new college. Things become better when she befriends her classmates who belong to different strata of society during a bus journey.",
    },
    {
      name: "Natpae Thunai",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Natpe_Thunai.jpg/220px-Natpe_Thunai.jpg",
      summary:
        "Prabhakaran, a former hockey player, helps a local team save their ground by training them to win a match against the Pondicherry team. However, a corrupt politician has his eyes set on the ground.",
      rating: 8.8
       
    },
    {
      name: "Jai Bhim",
      rating: 8.4,
      summary:
        "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
      poster:
        "https://timesofindia.indiatimes.com/thumb/87109980.cms?width=219&height=317&quality=80&imgsize=16050"
    },
    {
      name: "Nerkonda Parvai",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/30/Nerkonda_Paarvai_poster.jpg",
      rating: 8.6,
      summary:
        "A veteran lawyer comes out of retirement to help three women who have been falsely implicated in a criminal case. As he represents them in court, he faces powerful foes and patriarchal attitudes."
    },
    {
      name: "Maatran",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/6/60/Maattrraan_poster.jpg",
      rating: 6.8,
      summary:
        "A pair of conjoined twins strive to save their father's flourishing business from a spy. However, just before the spy is killed, they make a shocking revelation that may affect their lives forever."
    },
    
  ];
  const [movielist,setMovielist]=useState(initialmovielist);
  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");
  return (
  
    <div className="App">
     
        <div className='in'>
      <input placeholder="name" type="text" onChange={(event)=>setName(event.target.value)} ></input>
      <input placeholder="poster" type="text" onChange={(event)=>setPoster(event.target.value)} ></input>
      <input placeholder="rating" type="text" onChange={(event)=>setRating(event.target.value)} ></input>
      <input placeholder="summary" type="text" onChange={(event)=>setSummary(event.target.value)} ></input>
      <button onClick={()=>{
        const newmovie={
          name,
          poster,
          rating,
          summary,
        };
        setMovielist([...movielist,newmovie]);
      }}>Add Movie</button>
    </div>
    <div>
      {movielist.map(({name,poster,rating,summary})=>  
      <Movie  name={name} poster={poster} rating={rating} summary={summary}/>)}
      </div>
    </div>
  );
}

export default App;

function Movie({name,poster,rating,summary}){
  return(
    <div className="post">
      <img src={poster} alt={name} className="" />
      <div>
        <h2>{name}</h2>
        <p>{rating}</p>
      </div>
      <p>{summary}</p>
      <Counter />
    </div>
  );
}

function Counter(){
  const [like,setLike]=useState(0);
  const [dislike,setDislike]=useState(0);
  return(
    <div>
      <button onClick={()=>setLike(like+1)}>👍{like}</button>
      <button onClick={()=>setDislike(dislike+1)}>👍{dislike}</button>
    </div>
  );
}