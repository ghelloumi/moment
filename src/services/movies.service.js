import {headers, URI} from "../config/api.config";

import {fetchLatestMoviesError, fetchLatestMoviesPending, fetchLatestMoviesSuccess} from '../redux/actions';

export const getLatestMovies = () => (
    async dispatch => {
        dispatch(fetchLatestMoviesPending());
        try {
            const res = await fetch(`${URI}/movie/popular?language=en_US`, {
                method: 'GET',
                headers
            })
            const resJson = await res.json()
            if (resJson.error) {
                throw(resJson.error);
            }
            dispatch(fetchLatestMoviesSuccess(resJson))
            return resJson;
        } catch (e) {
            dispatch(fetchLatestMoviesError(e));
        }
    }
)