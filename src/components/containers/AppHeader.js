import React from 'react';
import {ALTS, IMAGES, TEXTS} from "../../utils/contants";
import Image from "../atoms/Image";
import {Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <div className="app__header">
            <span>{TEXTS.APP_TITLE} </span>
            <Image src={IMAGES.logo} alt={ALTS.LOGO_ALT}/>
            <ul>
                <li><Link to="/movies/popular">{TEXTS.LATEST} {TEXTS.MOVIES}</Link></li>
                <li><Link to="/movies/top_rated">{TEXTS.TOP_RATED} {TEXTS.MOVIES}</Link></li>
            </ul>
        </div>
    );
}

export default AppHeader;
