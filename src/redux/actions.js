import {ACTIONS} from "../utils/contants";

// Latest Movies Actions
export const fetchLatestMoviesPending = () => {
    return {
        type: ACTIONS.FETCH_LATEST_MOVIES_PENDING
    }
}

export const fetchLatestMoviesSuccess = (latestMoviesRes) => {
    return {
        type: ACTIONS.FETCH_LATEST_MOVIES_SUCCESS,
        latestMoviesRes
    }
}

export const fetchLatestMoviesError = (error) => {
    return {
        type: ACTIONS.FETCH_LATEST_MOVIES_ERROR,
        error
    }
}
