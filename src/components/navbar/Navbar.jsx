import React from 'react';
import { NavLink } from 'react-router';
import { FaHome } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-base-100 shadow'>
            <div className="navbar container mx-auto p-4">
                <div className="flex-1">
                    <a className="text-2xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
                </div>
                <div className="flex-none">
                    <NavLink to={'/'}
                        className={({ isActive }) => `btn font-semibold text-gray-400 mr-3 ${isActive ? "text-white bg-[#244D3F]" :
                            "text-black border-gray-200"}`}><FaHome></FaHome> Home</NavLink>

                    <NavLink to={'/timeline'}
                        className={({ isActive }) => `btn font-semibold text-gray-400 mr-3 ${isActive ? "text-white bg-[#244D3F] " :
                            "text-black border border-gray-200"}`}><IoTimeOutline></IoTimeOutline> TimeLine</NavLink>

                    <NavLink to={'/stats'}
                        className={({ isActive }) => `btn font-semibold text-gray-400 mr-3 ${isActive ? "text-white bg-[#244D3F]" :
                            "text-black border border-gray-200"}`}><TfiStatsUp></TfiStatsUp> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;