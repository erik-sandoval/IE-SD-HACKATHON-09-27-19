import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";
import images from "../images/404.png";


export default function Error(){
    return(
        <div className="error">
            
            <img src={images} />
            <p>Page not found</p>
            <Link to="/Search" className="btn-error">
                Return to Search
            </Link>
        </div>
    );
}