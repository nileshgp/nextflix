import React, { useState, useEffect } from 'react';
import axios from '../axios';

const Row = ({ title, fetchUrl }) => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            setShows(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(shows);

    return (
        <div>
            {/* title */}
            <h2> {title} </h2>

            {/* containers -> posters */}

            {/* containers -> posters */} 


        </div>
    )
}

export default Row