import { Moviecard } from './Moviecard';
import { useEffect, useState } from 'react';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
export function List() {
    const [movielist, setMovielist] = useState([]);

    const getmovie = (() => {
        fetch(`${API}/users`, { method: "GET" })
            .then((data) => data.json())
            .then((users) => setMovielist(users))
    }
    );
    useEffect(() => getmovie(), []);
    const deleteMoviecard = (id) => {
        console.log("delete movie id", id);
        fetch(`${API}users/${id}`, { method: "DELETE" })
            .then(() => getmovie())
    }
    const navigate = useNavigate();

    return (
        <div className="movie-list">

            {movielist.map(({ name, poster, rating, summary, id }, index) => (
                <Moviecard
                    key={index}
                    id={id}
                    name={name}
                    poster={poster}
                    rating={rating}
                    summary={summary}

                    deleteButton={
                        <IconButton style={{ marginLeft: "auto" }} color="error" onClick={() => deleteMoviecard(id)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    }
                    editButton={
                        <IconButton onClick={() => navigate(`/list2/edit/${id}`)} color="error" aria-label="delete">
                            <EditIcon />
                        </IconButton>


                    }
                />
            ))}
        </div>
    );
}
