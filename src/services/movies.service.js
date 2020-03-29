import {headers, URI} from "../config/api.config";

import {fetchMoviesError, fetchMoviesPending, fetchMoviesSuccess} from '../redux/actions';

export const getMovies = (page, moviesPageType) => (
    async dispatch => {
        dispatch(fetchMoviesPending());
        try {
            const res = await fetch(`${URI}/movie/${moviesPageType}?page=${page}&language=en_US`, {
                method: 'GET',
                headers
            })
            const resJson = await res.json()
            if (resJson.error) {
                throw(resJson.error);
            }
            dispatch(fetchMoviesSuccess(resJson))
            return resJson;
        } catch (e) {
            dispatch(fetchMoviesError(e));
        }
    }
)