import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='flex wrapper justify-between items-center'>
            <div className='text-gray-500 text-xl font-bold select-none cursor-pointer'>B<span className='text-orange-500 text-3xl'>ook No</span>w</div>
            <nav>
                <ul className='flex'>
                    <NavLink activeClassName='font-bold border-b' to='/home'><li className='px-3'>Home</li></NavLink>
                    <NavLink activeClassName='font-bold border-b' to='/myorders'><li className='px-3'>My Orders</li></NavLink>
                    <NavLink activeClassName='font-bold border-b' to='/booknow'><li className='px-3'>Book Now</li></NavLink>
                </ul>
            </nav>
            <div><NavLink activeClassName='font-bold border-b' to='/login'>Login</NavLink></div>
        </div>
    );
};

export default Nav;