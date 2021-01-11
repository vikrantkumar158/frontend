import React, { useState, useEffect } from 'react';
import './App.css';
require('dotenv').config()

function App() {
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
        .then(response => response.json())
        .then(data => setMessage(data.message))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {message}
        </div>
    );
}

export default App;
