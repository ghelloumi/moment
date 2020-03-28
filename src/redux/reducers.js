import {ACTIONS} from "../utils/contants";
import {combineReducers} from "redux";

const initialState = {
    pending: false,
    latestMoviesRes: {},
    error: null
}

const latestMoviesData = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_LATEST_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_LATEST_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                latestMoviesRes: action.latestMoviesRes
            }
        case ACTIONS.FETCH_LATEST_MOVIES_ERROR:
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
    latestMoviesData
})

export default reducers