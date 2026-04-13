import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className='btn'>Home</button>
                <button className='btn'>Home</button>
                <button className='btn'>Home</button>
            </div>
        </div>
    );
};

export default Navbar;