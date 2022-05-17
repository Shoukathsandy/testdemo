import { Counter } from "./Counter";

export function Movie({ name, poster, rating, summary }) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };

  return (<div className="movie-container">
    <img src={poster} alt={name} className="movie-poster" />
    <div className="movie-specs">
      <h2 className="movie-name">{name}</h2>
      <p style={styles} className="movie-rating">⭐ {rating}</p>
    </div>


    <p className="movie-summary">{summary}</p>

    <Counter />
  </div>
  );
}
