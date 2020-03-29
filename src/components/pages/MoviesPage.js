import React from 'react';
import PageTools from "../organisms/PageTools";
import MoviesList from "../organisms/MoviesList";

const MoviesPage = (props) => {
    return (
        <div className="movies__page">
            <div className="movies__page__tools">
                <PageTools/>
            </div>
            <div className="movies__page__content">
                <MoviesList {...props}/>
            </div>
        </div>
    );
}

export default MoviesPage;
