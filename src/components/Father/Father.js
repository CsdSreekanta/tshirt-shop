import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself'
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({house}) => {
    return (
        <div className=' father border-2 border-red-600 p-4 m-4 h-72 w-40'>
       <p>Father</p>
       <p>House: {house}</p>
      <Myself house={house}></Myself>
      <Brother house={house}></Brother>
      <Sister house={house}></Sister>
        </div>
    );
};

export default Father;