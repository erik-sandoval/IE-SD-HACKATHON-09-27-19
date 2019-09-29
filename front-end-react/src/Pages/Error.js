import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";


export default function Error(){
    return(
        <div className="error">
            <h2>404</h2>
            <p>User not found</p>
            <Link to="/" className="btn-primary">
                Return to Home
            </Link>
        </div>
    );
}