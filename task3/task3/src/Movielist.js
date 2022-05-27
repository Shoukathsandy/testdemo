import { Moviecard } from "./Moviecard";



function Movielist({initialmovielist}) {
    const movielists = initialmovielist;
    return (
        <div className="movie-list">
            {movielists.map(({ name, poster, rating, summary }) => (
                <Moviecard name={name} poster={poster} rating={rating} summary={summary} />
            ))}

        </div>
    );
}
export default Movielist;