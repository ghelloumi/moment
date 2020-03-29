import React, {useEffect, useMemo, useState} from 'react';
import {getMovies} from "../../services/movies.service";
import {TEXTS} from "../../utils/contants"
import {useDispatch, useSelector} from "react-redux";
import MovieCard from "../molecules/MovieCard";
import Loader from "../atoms/Loader";

const MoviesList = ({type, loc}) => {
    const {pending, moviesRes, error} = useSelector(state => state.moviesData);
    const {pending: pendingSearch, moviesSearchRes, error: errorSearch, query} = useSelector(state => state.moviesSearchData);
    const [page, setPage] = useState(1)
    const [moviesResResults, setMoviesResResults] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        setPage(1)
    }, [loc])

    useEffect(() => {
        dispatch(getMovies(page, type))
    }, [page, type]);

    useMemo(() => {
        if (moviesSearchRes.results && moviesSearchRes.results.length) {
            setMoviesResResults(moviesSearchRes.results)
            setPage(1)
        } else if (moviesRes.results) {
            setMoviesResResults([...(page > 1 ? moviesResResults : []), ...moviesRes.results])
        }
    }, [moviesRes, moviesSearchRes])

    const handleLoadMore = (page) => {
        setPage(page)
    }

    if ((pending && page === 1) || pendingSearch) {
        return <Loader/>
    }

    if (error || errorSearch) {
        return (
            <div className="movies__list error">
                <span>Error Loading content: {error}</span>
            </div>
        )
    }

    return (
        <>
            <div className="movies__list">
                {moviesResResults && moviesResResults.map((movie, i) => (
                    <MovieCard key={i} movie={movie}/>
                ))}
            </div>
            {!query && (pending && page > 1 ? <Loader/> :
                <div className="movies__list__loadMore">
                    <button onClick={() => handleLoadMore(page + 1)}>
                        {TEXTS.LOAD_MORE_BUTTON} {TEXTS.MOVIES}
                    </button>
                </div>)
            }
        </>
    );
}

export default MoviesList;
