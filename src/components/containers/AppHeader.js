import React from 'react';
import {ALTS, IMAGES, TEXTS} from "../../utils/contants";
import Image from "../atoms/Image";
import {BrowserRouter as Router, Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <div className="app__header">
            <span>{TEXTS.APP_TITLE} <span>> Page Name</span></span>
            <Image src={IMAGES.logo} alt={ALTS.LOGO_ALT}/>
            <Router>
                <ul>
                    <li>
                        <Link to={{
                            pathname: `/movies/latest`,
                            state: {type: "popular"}
                        }}>{TEXTS.LATEST} {TEXTS.MOVIES}</Link>
                        <Link to={{
                            pathname: `/movies/top_rated`,
                            state: {type: "top_rated"}
                        }}>{TEXTS.TOP_RATED} {TEXTS.MOVIES}</Link>
                    </li>
                </ul>
            </Router>
        </div>
    );
}

export default AppHeader;
