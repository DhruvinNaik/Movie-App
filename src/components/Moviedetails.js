import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function Moviedetails(){
    const history = useNavigate()
    const { imdbID }=useParams();
    const [moviedetail,setMoviedetail]=useState(null);

    useEffect(()=>{
        axios
        .get(`https://www.omdbapi.com/?i=${ imdbID }&apikey=4a3b711b`)
        .then((response)=>
            setMoviedetail(response.data));
    },[imdbID]);
    if(!moviedetail){
        return <div></div>;
    }
    return(
        <div className="box">
            <h1 className="heading">Movie Title :<br></br>{moviedetail.Title}</h1>
            <img src={moviedetail.Poster} alt={moviedetail.Title}/>
              <h2> <p>Type:{moviedetail.Type}</p></h2>
           <h2> <p>Year:{moviedetail.Year}<br></br></p></h2>
           <h2><p>Director:{moviedetail.Director}<br></br></p></h2>
           <h2><p>Genre:{moviedetail.Genre}<br></br></p></h2>
           <h2><p>Plot:{moviedetail.Plot}<br></br></p></h2>
            <button className="btn" onClick={()=>history(-1)}>Back</button>
        </div>
    );

}
export default Moviedetails;