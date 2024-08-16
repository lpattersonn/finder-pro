import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function FirstPage() {
    const [inputValue, setInputValue] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputValue)
        if (parseInt(inputValue) == 7) {
            navigate("/second-page")
        } else {
            setInputValue('');
            setStatusMessage(`${inputValue} is incorrect, try again`);
        }
    }
    return (
        <div className="container primary mt-5">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h1>Part 1:</h1>
                        <p className="lead">You hear a bang!</p>
                        <p>It's cold and smells delicious. Be careful not to add too much or risk burning your tongue.</p>
                        <form onSubmit={(e) => {
                            setStatusMessage('');
                            handleSubmit(e)}}>
                            <div className="row">
                                <div className="col-auto">
                                    <input value={inputValue} name="inputValue" onChange={(e) => {
                                        setInputValue(e.target.value);
                                    }} className="form-control" type="number" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary">Enter</button>
                                </div>
                            </div>
                        </form>
                        {statusMessage != '' ? <div className="mt-3">{statusMessage}</div> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
};