import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/"; 

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            setShows(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return (
        <div className="row">
            <h2> {title} </h2>
            <div className="row__posters">
                {shows.map(show => (
                <img
                key={show.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${isLargeRow ? show.poster_path : show.backdrop_path}`}
                alt={show.name}/>
                ))}
            </div>
            {/* containers -> posters */}

            {/* containers -> posters */} 


        </div>
    )
}

export default Row