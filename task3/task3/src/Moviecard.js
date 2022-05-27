import { Counter } from "./Counter";
import { useState } from "react";

export function Moviecard({  name, poster, rating, summary }) {
    const styles={
        color: rating > 7.5 ? "green":"red",
    }
    const [show,setShow]=useState(true);
    //conditional styling
    // const summarystyle={
    //     display: show? "block" : "none",
    // }

    return (
        <div className="movie-container">
            <img src={poster} alt={name} className="movie-poster" />
            <div className="movie-specs">
                <h2 className="movie-name">{name}</h2>
                <p className="movie-rating" style={styles}>⭐{rating}</p>
            </div>
            <button onClick={()=>setShow(!show)}>Toggle Summary</button>
            { show? <p    className="movie-summary">{summary}</p>:""}
            <div> <Counter /></div>
        </div>
    );
}
