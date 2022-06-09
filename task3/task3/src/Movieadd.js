// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from './global';
import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
const FormValidationSchema = yup.object({
    name: yup.string().required("enter valid name").min(5, "type more than 5 letters"),
    poster: yup.string().required("enter valid text").min(5),
    rating: yup.string().required("enter valid text").min(1).max(2),
    summary: yup.string().required("enter valid text").min(5),
    trailer: yup.string().required("enter valid text").min(5),
})

export function Movieadd() {
    // const movielist=initialmovielist;
    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");
    // const [trailer, setTrailer] = useState("");
    const navigate = useNavigate();
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { name: "", poster: "", rating: "", summary: "", trailer: "" },
        validationSchema: FormValidationSchema,
        onSubmit: (values) => {
            Addmovie(values);
            console.log(values);
        }
    })
   
    const Addmovie = (newmovie) => {


        // const newmovie =  {

        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        //     trailer: trailer,
        //     name: name,
        // };
        console.log(newmovie);
        // setMovielist([...movielist, newmovie]);
        //post method - fetch
        //1. method- POST
        //2.data- (newmovie) body: json.stringify
        //3. headers - json 
        fetch(`${API}/users`,
            {
                method: "POST",
                body: JSON.stringify(newmovie),
                headers: { 'Content-Type': 'Application/json' }
            })
            .then(() => navigate('/list2'));
    }


    return (
        <form onSubmit={handleSubmit}
            className="add-movie-form">
            < TextField type="text"
                name="name"
                label="movie name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                error={errors.name && touched.name }
                onBlur={handleBlur} 
                helperText={errors.name && touched.name ? errors.name : ""}
                />
            
            <TextField type="text"
                name="trailer"
                label="movie trailer"
                variant="outlined"
                value={values.trailer}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.trailer && touched.trailer}
                helperText= {errors.trailer && touched.trailer ? errors.trailer : ""}/>
           
            <TextField type="text"
                name="poster"
                label="movie poster"
                variant="outlined"
                value={values.poster}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.poster && touched.poster} 
                helperText={errors.poster && touched.poster ? errors.poster : ""}/>
            
            <TextField type="text"
                name="rating"
                label="movie rating"
                variant="outlined"
                value={values.rating}
                onChange={handleChange}
                onBlur={handleBlur} 
                error={errors.rating && touched.rating }
                helperText= {errors.rating && touched.rating ? errors.rating : ""}/>
           
            <TextField type="text"
                name="summary"
                label="movie summary"
                variant="outlined"
                value={values.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.summary && touched.summary}
                helperText={errors.summary && touched.summary ? errors.summary : ""} />
            
            <Button type="submit" variant="outlined" >Add movie</Button>

        </form>
    );
}
