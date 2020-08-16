import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests'
import './Banner.css';

const Banner = () => {
    const [show, setShow] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setShow(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    } 

    return (
        <header
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${show?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {show?.title || show.name || show?.original_name}
                </h1>
                <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
            </div>

            <h1 className="banner__description">
                {truncate(show?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );
}

export default Banner
