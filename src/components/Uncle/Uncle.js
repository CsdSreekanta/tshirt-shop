import React from 'react';

const Uncle = ({house}) => {
    return (
        <div className='border-2 border-red-600 p-4 m-4 h-72 w-40'>
            <p>Uncle</p>
            <p>House {house}</p>
        </div>
    );
};

export default Uncle;