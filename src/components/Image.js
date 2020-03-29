import React from 'react';
import {IMAGES} from "../utils/contants";

const Image = ({src, alt}) => {
    const onError = (e) => {
        e.target.src = IMAGES.imageNotFound
    }

    return (
        <img src={src} alt={alt} onError={onError}/>
    );
}

export default Image;
