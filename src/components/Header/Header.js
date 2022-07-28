import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Welcome to our Tshirt shop</h1>
            <nav className='bg-indigo-500 p-2 '>
                <Link className='text-xl font-bold mr-2 p-1  hover:text-orange-400' to='/home'>Home</Link>
                <Link className='text-xl font-bold mr-2 p-1  hover:text-orange-400' to='/orderreview'> Order Review</Link>
                <Link className='text-xl font-bold mr-2 p-1  hover:text-orange-400' to='/grandpa'>GrandPa</Link>
            
            </nav>
        </div>
    );
};

export default Header;