import { Moviecard } from './Moviecard';

export function List({ movielist }) {
    return (
        <div className="movie-list">

            {movielist.map(({ name, poster, rating, summary}, index ) => (
                <Moviecard 
                key={index} 
                id={index}
                name={name} 
                poster={poster} 
                rating={rating} 
                summary={summary} />
            ))}

        </div>
    );
}
