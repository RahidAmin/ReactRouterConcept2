import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'

export const AssetContext = createContext('gold');

export const MoneyContext = createContext(1000);

const GrandPa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'Diamond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Net Money:{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex'>
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default GrandPa;

/**
 * 1.crate context and export it
 * 2.add provider for the context with a value.
 * 3.useContext to access value in the context api
 */