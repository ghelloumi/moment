import {ACTIONS} from "../utils/contants";
import {combineReducers} from "redux";

const initialMoviesState = {
    pending: false,
    moviesRes: {},
    error: null
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

const reducers = combineReducers({
    moviesData
})

export default reducers