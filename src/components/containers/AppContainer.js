import React from 'react';
// import PageTools from "../organisms/PageTools";
// import MoviesList from "../organisms/MoviesList";
import Routes from "../../Routes";

const AppContainer = () => {
    return (
        <div className="app__container">
            <Routes/>
            {/*<div className="app__container__pageTools">*/}
            {/*    <PageTools/>*/}
            {/*</div>*/}
            {/*<div className="app__container__pageContent">*/}
            {/*    <MoviesList/>*/}
            {/*</div>*/}
        </div>
    );
}

export default AppContainer;
