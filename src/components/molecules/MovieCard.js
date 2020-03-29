import React from 'react';
import Image from "../atoms/Image";
import {ALTS} from "../../utils/contants";
import {IMAGE_PATH} from "../../config/api.config";

const MovieCard = ({movie}) => {
    return (
        <div className="movie__card">
            <Image alt={ALTS.MOVIE_CARD_ALT} src={IMAGE_PATH + movie.poster_path}/>
            <div className="movie__card__info">
                <span>{movie.vote_average}</span>
                <span>{movie.original_title}</span>
                <span>{movie.release_date}</span>
            </div>
        </div>
    );
}

export default MovieCard;
