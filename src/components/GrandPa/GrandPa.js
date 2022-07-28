import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandPa = () => {
    const house =7;
    return (
        <div className='border-red-500 border-2 p-3 m-4'>
            <h1>GrandPa</h1>
            <p>House {house}</p>
            <div className='border-red-600 border-2 m-2 p-3 flex '>
            <Father house ={house}></Father>
            <Uncle house={house} ></Uncle>
            <Aunty house={house} ></Aunty>
            </div>
        </div>
    );
};

export default GrandPa;