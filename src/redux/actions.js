import {ACTIONS} from "../utils/contants";

// Movies Actions
export const moviesActions = {
    fetchMoviesPending: () => {
        return {
            type: ACTIONS.FETCH_MOVIES_PENDING
        }
    },
    fetchMoviesSuccess: (moviesRes) => {
        return {
            type: ACTIONS.FETCH_MOVIES_SUCCESS,
            moviesRes
        }
    },
    fetchMoviesError: (error) => {
        return {
            type: ACTIONS.FETCH_MOVIES_ERROR,
            error
        }
    }
}

// Movie Details Actions
export const movieDetailsActions = {
    fetchMovieDetailsPending: () => {
        return {
            type: ACTIONS.FETCH_MOVIE_DETAILS_PENDING
        }
    },
    fetchMovieDetailsSuccess: (movieDetailsRes) => {
        return {
            type: ACTIONS.FETCH_MOVIE_DETAILS_SUCCESS,
            movieDetailsRes
        }
    },
    fetchMovieDetailsError: (error) => {
        return {
            type: ACTIONS.FETCH_MOVIE_DETAILS_ERROR,
            error
        }
    }
}