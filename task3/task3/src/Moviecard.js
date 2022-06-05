import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
export function Moviecard({ name, poster, rating, summary, id }) {
    const styles = {
        color: rating > 7.5 ? "green" : "red",
    }
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    // const {movieid}=useParams();
    //conditional styling
    // const summarystyle={
    //     display: show? "block" : "none",
    // }

    return (
        <div className="movie-container">
             <Card >
            <img src={poster} alt={name} className="movie-poster" />

            <div className="movie-specs">
            <h2 className="movie-name">{name}</h2>
                <CardActions className="into">
                <IconButton color="primary"  onClick={() => { navigate('/list/' + id) }} ><InfoOutlinedIcon /></IconButton>
                    <IconButton color="primary" onClick={() => setShow(!show)}>{show ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}</IconButton>
                </CardActions>
                <div className="rat">
                <IconButton color="primary"><StarRateIcon /></IconButton>
                <p className="movie-rating" style={styles}>
                    
                    {rating}
                    </p>
                    </div>
            </div>

            <CardContent>
                {show ? <p className="movie-summary">{summary}</p> : ""}
            </CardContent>
            <div>
                <CardActions>
                    <Counter />
                </CardActions>
            </div>
            </Card>
        </div>
    );
}
