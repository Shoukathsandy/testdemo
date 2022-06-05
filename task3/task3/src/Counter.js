import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div>
            <IconButton color="primary" aria-label="Like" onClick={() => setLike(like + 1)}>
                👍
                <Badge badgeContent={like} color="primary">
                </Badge>
            </IconButton>
            <IconButton color="primary" aria-label="Like" onClick={() => setDislike(dislike + 1)}>
                👎 
                <Badge badgeContent={dislike} color="primary">
                </Badge>
            </IconButton>
        </div>
    );
}
