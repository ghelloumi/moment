import React, {useState} from 'react';
import PageTools from "../organisms/PageTools";
import MoviesList from "../organisms/MoviesList";

const MoviesPage = (props) => {

    const [location, setLocation] = useState(props.history.location.pathname)

    props.history.listen((location) => {
        setLocation(location.pathname)
    })


    return (
        <div className="movies__page">
            <div className="movies__page__tools">
                <PageTools/>
            </div>
            <div className="movies__page__content">
                <MoviesList type={props.match.params.type} loc={location}/>
            </div>
        </div>
    );
}

export default MoviesPage;
