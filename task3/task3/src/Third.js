import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Third({ movielist }) {
    const Navigate = useNavigate();
    const { movieid } = useParams();
    const movie = movielist[movieid];
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
