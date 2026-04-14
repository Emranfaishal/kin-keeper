import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
                <h1 className='text-7xl font-extrabold'>kinkeeper</h1>
                <p className='font-semibold'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div>
                    <p className='text-white font-bold text-4xl pb-3'>Social Links</p>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='p-3 text-3xl bg-white text-black rounded-full'><FaFacebook /></span>
                        <span className='p-3 text-3xl bg-white text-black rounded-full'><FaInstagram /></span>
                        <span className='p-3 text-3xl bg-white text-black rounded-full'><FaXTwitter /></span>
                    </div>
                </div>
                <hr className='text-gray-200 lg:container lg:mx-auto' />
                <div className='flex'>
                    <div>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex lg:gap-10 lg:ml-270'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/timeline'}>TimeLine</Link>
                        <Link to={'/stats'}>Stats</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;