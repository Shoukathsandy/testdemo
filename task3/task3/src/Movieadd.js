import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from './global';
export function Movieadd() {
    // const movielist=initialmovielist;
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");
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
        fetch(`${API}/users`,
            {
                method: "POST",
                body: JSON.stringify(newmovie),
                headers: { 'Content-Type': 'Application/json' }
            })
            .then(() => navigate('/list2'));
    }


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

            <Button variant="outlined" onClick={addmovie}>Add movie</Button>

        </div>
    );
}
