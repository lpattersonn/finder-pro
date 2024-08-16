import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container primary mt-5">
            <div className="row justify-content-center">
                <div className="col text-center">
                <h1>Welcome! Solve this puzzle to find your gift!</h1>
                <Link to="/first-page"><button class="btn btn-primary btn-lg" type="button">Start!</button></Link>
                </div>
            </div>
        </div>
    )
};