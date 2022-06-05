import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function Movieadd({ movielist, setMovielist }) {
    // const movielist=initialmovielist;
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

    return (
        <div
            className="add-movie-form">
            < TextField type="text"
                id="outlined-basic"
                label="movie name"
                variant="outlined"
                onChange={(event) => setName(event.target.value)} />

            <TextField type="text"
                id="outlined-basic"
                label="movie trailer"
                variant="outlined" 
                onChange={(event) => setTrailer(event.target.value)} />

            <TextField type="text"
                id="outlined-basic"
                label="movie poster"
                variant="outlined" 
                onChange={(event) => setPoster(event.target.value)} />

            <TextField type="text"
                id="outlined-basic"
                label="movie rating"
                variant="outlined" 
                onChange={(event) => setRating(event.target.value)} />

            <TextField type="text"
                id="outlined-basic"
                label="movie summary"
                variant="outlined" 
                onChange={(event) => setSummary(event.target.value)} />

            <Button  variant="outlined"  onClick={() => {
                const newmovie = {
                    name: name,
                    poster: poster,
                    rating: rating,
                    summary: summary,
                    trailer: trailer,
                };
                setMovielist([...movielist, newmovie]);

            }}>Add movie</Button>

        </div>
    );
}
