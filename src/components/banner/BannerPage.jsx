import React from 'react';
import { HiPlusSm } from "react-icons/hi";
import { Link, useLoaderData } from 'react-router';

const BannerPage = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div className='container mx-auto'>
            <div className="hero mt-20 mb-20">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-gray-400">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                            relationships that matter most.
                        </p>
                        <Link to={'/'}>
                            <button className="btn text-white bg-[#244D3F]"><HiPlusSm></HiPlusSm> Add a Friend</button></Link>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-10 mb-10'>

                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-5 space-y-5'>
                        <h2 className='text-4xl font-bold'>{friend.length}</h2>
                        <p className='text-2xl'>Total Friends</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-10 space-y-5'>
                        <h2 className='text-4xl font-bold'>3</h2>
                        <p className='text-2xl'>On Track</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-5 space-y-5'>
                        <h2 className='text-4xl font-bold'>6</h2>
                        <p className='text-2xl'>Need Attention</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-5 space-y-5'>
                        <h2 className='text-4xl font-bold'>12</h2>
                        <p className='text-2xl'>Interactions This Month</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BannerPage;