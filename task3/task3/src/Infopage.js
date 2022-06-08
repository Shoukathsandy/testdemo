import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { API } from './global';

export function Infopage() {
    // const [movielist, setMovielist] = useState([]);
    const Navigate = useNavigate();
    const { movieid } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(`${API}/users/${movieid}`)
            .then((data) => data.json())
            .then((users) => setMovie(users))
    }, [movieid]
    );

    const styles = {
        color: movie.rating > 7.5 ? "green" : "red",
    }
    return (
        <div>
            <iframe width="640" height="480"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div className="movie-specs">
                <h2 className="movie-name">{movie.name} </h2>
                <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
            </div>
            <p className="movie-summary">{movie.summary}</p>
            <button className="btn btn-secondary" onClick={() => { Navigate(-1) }}>back</button>
        </div>
    );
}
