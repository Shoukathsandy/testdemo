import { useState } from "react";

export function Counter() {
  // let like=4;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="movie-like">
      <button onClick={() => setLike(like + 1)}>👍{like} </button>
      <button onClick={() => setDisLike(dislike + 1)}>👎{dislike}</button>
    </div>
  );
}
