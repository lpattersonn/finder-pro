import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function FirstPage() {
    const [inputValue, setInputValue] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputValue)
        if (parseInt(inputValue) == 4) {
            navigate("/congratulations")
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
                        <h1>Final Part:</h1>
                        <p className="lead">Dreams!</p>
                        <p>Positioned behind where you lay your head, the final peice of the puzzle awaits.</p>
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