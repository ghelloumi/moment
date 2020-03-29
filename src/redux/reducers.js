import {ACTIONS} from "../utils/contants";
import {combineReducers} from "redux";

const initialMoviesState = {
    pending: false,
    moviesRes: {},
    error: null
}

const initialMovieDetailsState = {
    pending: false,
    movieDetailsRes: {},
    error: null
}

const initialMoviesSearchState = {
    pending: false,
    moviesSearchRes: {},
    error: null,
    query: ""
}

const moviesData = (state = initialMoviesState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                moviesRes: action.moviesRes
            }
        case ACTIONS.FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

const movieDetailsData = (state = initialMovieDetailsState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_MOVIE_DETAILS_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                pending: false,
                movieDetailsRes: action.movieDetailsRes
            }
        case ACTIONS.FETCH_MOVIE_DETAILS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

const moviesSearchData = (state = initialMoviesSearchState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_MOVIE_SEARCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_MOVIE_SEARCH_SUCCESS:
            return {
                ...state,
                pending: false,
                moviesSearchRes: action.moviesSearchRes,
                query: action.query
            }
        case ACTIONS.FETCH_MOVIE_SEARCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    moviesData,
    movieDetailsData,
    moviesSearchData
})

export default reducers