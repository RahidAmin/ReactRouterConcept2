import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin nam={'Spandon'}></Cousin>
                <Cousin nam={'Sporsho'}></Cousin>
            </section>
            <p>Money:{money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add More 1000 Taka</button>
            {/* <button>Add</button> */}
        </div>
    );
};

export default Aunty;