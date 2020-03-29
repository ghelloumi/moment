import logo from "../assets/logo.png"
import loader from "../assets/loader.gif"
import imageNotFound from "../assets/imageNotFound.png"

export const ACTIONS = {
    FETCH_MOVIES_PENDING: 'FETCH_MOVIES_PENDING',
    FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR'
}

export const TEXTS = {
    APP_TITLE: "Moment App For theMovieDb",
    LOAD_MORE_BUTTON: "Load more",
    MOVIES: "movies",
    LATEST: "Latest",
    TOP_RATED: "Top rated"
}

export const ALTS = {
    LOGO_ALT: "Logo picture for the app",
    LOADING_ALT: "Loader animation",
    MOVIE_CARD_ALT: "Movie Poster"
}

export const IMAGES = {
    logo, loader, imageNotFound
}