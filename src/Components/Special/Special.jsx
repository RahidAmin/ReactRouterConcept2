import React, { useContext } from 'react';
import { AssetContext } from '../GrandPa/GrandPa';

const Special = ({ asset }) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special Person</h2>
            <p>Asset:{asset}</p>
            <p>Also has:{gift}</p>
        </div>
    );
};

export default Special; 