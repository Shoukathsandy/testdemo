import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from './global';
export function Editmovie() {
  const [movie, setMovie] = useState(null);
  const { movieid } = useParams();
  useEffect(() => {
    fetch(`${API}/users/${movieid}`)
      .then((data) => data.json())
      .then((users) => setMovie(users))
  }, [movieid]
  );
  return (
    <div>
      {movie ? <Edit movie={movie} /> : "loading....."}
    </div>
  )

}

function Edit({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();


  const addmovie = () => {
    const newmovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    console.log(newmovie);
    // setMovielist([...movielist, newmovie]);
    //post method - fetch
    //1. method- POST
    //2.data- (newmovie) body: json.stringify
    //3. headers - json 
    fetch(`${API}/users/${movie.id}`,
      {
        method: "PUT",
        body: JSON.stringify(newmovie),
        headers: { 'Content-Type': 'Application/json' }
      })
      .then(() => navigate('/list2'));


  }

  return (

    <div className="add-movie-form">
      {/* this pre tag is using to print json  */}
      {/* <pre>{JSON.stringify(movie,null,2)}</pre>   */}
      < TextField type="text"
        id="outlined-basic"
        label="movie name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="movie trailer"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="movie poster"
        variant="outlined"
        value={poster}
        onChange={(event) => setPoster(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="movie rating"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)} />

      <TextField type="text"
        id="outlined-basic"
        label="movie summary"
        variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)} />

      <Button variant="outlined" onClick={addmovie}>Save Movie</Button>

    </div>
  );
}