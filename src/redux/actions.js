import {ACTIONS} from "../utils/contants";

// Movies Actions
export const fetchMoviesPending = () => {
    return {
        type: ACTIONS.FETCH_MOVIES_PENDING
    }
}

export const fetchMoviesSuccess = (moviesRes) => {
    return {
        type: ACTIONS.FETCH_MOVIES_SUCCESS,
        moviesRes
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: ACTIONS.FETCH_MOVIES_ERROR,
        error
    }
}