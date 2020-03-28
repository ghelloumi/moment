import React, {useEffect} from 'react';
import './styles/App.scss';
import {getLatestMovies} from "./services/movies.service";
import {ALTS, IMAGES, TEXTS} from "./utils/contants"
import {useDispatch, useSelector} from "react-redux";


function App() {
    const latestMoviesData = useSelector(state => state.latestMoviesData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestMovies());
    }, []);

    console.log(latestMoviesData)

    return (
            <div className="App">
                <div className="App__title">
                    <span>{TEXTS.APP_TITLE}</span>
                    <img src={IMAGES.logo} alt={ALTS.LOGO_ALT}/>
                </div>
            </div>
    );
}

export default App;
