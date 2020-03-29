import React from 'react';
import {ALTS, IMAGES, TEXTS} from "./utils/contants"
import PopularMoviesList from "./components/PopularMoviesList";
import './styles/App.scss';
import PageTools from "./components/PageTools";

const App = () => {
    return (
        <div className="App">
            <div className="App__title">
                <span>{TEXTS.APP_TITLE}</span>
                <img src={IMAGES.logo} alt={ALTS.LOGO_ALT}/>
            </div>
            <div className="App__container">
                <div className="App__container__pageName">Page Name</div>
                <div className="App__container__pageContent">
                    <PageTools/>
                    <PopularMoviesList/>
                </div>
            </div>
        </div>
    );
}

export default App;
