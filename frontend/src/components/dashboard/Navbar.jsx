import React from 'react';
import { useAuth } from '../../Context/authContext';
const Navbar = () => {
    const { user } = useAuth();
    return (
        <div className='flex items-center text-white justify-between h-12 bg-teal-600 px-5'>
            <p> Welcome {user.name}</p>
            <button className='px-4 py-1 bg-teal-700 hover:bg-teal-900'>Logout</button>
        </div>
    );
}

export default Navbar;
