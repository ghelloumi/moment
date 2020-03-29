import React, {useEffect} from 'react';
import {getLatestMovies} from "../services/movies.service";
import {ALTS, IMAGES} from "../utils/contants"
import {useDispatch, useSelector} from "react-redux";
import Image from "./Image";
import MovieCard from "./MovieCard";

const PopularMoviesList = () => {
    const {pending, latestMoviesRes, error} = useSelector(state => state.latestMoviesData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestMovies());
    }, []);

    if (pending) {
        return (
            <div className="popular__movies__list loading">
                <Image src={IMAGES.loader} alt={ALTS.LOADING_ALT}/>
            </div>
        )
    }

    if (error) {
        return (
            <div className="popular__movies__list error">
                <span>Error Loading content: {error}</span>
            </div>
        )
    }

    return (
        <div className="popular__movies__list">
            {latestMoviesRes.results && latestMoviesRes.results.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
}

export default PopularMoviesList;
