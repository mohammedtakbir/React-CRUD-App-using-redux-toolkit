import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Not Found</h1>
            <h3>Back to Home Page <Link to='/'>Home</Link></h3>
        </div>
    );
};

export default Error;