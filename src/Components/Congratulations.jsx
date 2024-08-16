import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function FirstPage() {
    const [inputValue, setInputValue] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate();

    return (
        <div className="container primary mt-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Congratulations on beating the puzzle, reveal what's beneath the number for your gift. 🎁</h1>
                </div>
            </div>
        </div>
    )
};