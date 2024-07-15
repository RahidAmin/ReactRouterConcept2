import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ nam }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{nam}</p>

            {nam === 'Shinha' && <Friend></Friend>}
        </div>
    );
};

export default Cousin;