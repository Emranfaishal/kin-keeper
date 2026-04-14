// import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BiSolidTrash } from 'react-icons/bi';
import { FiEdit, FiPhoneCall } from 'react-icons/fi';
import { IoIosVideocam, IoMdArchive, IoMdClock, IoMdText } from 'react-icons/io';
import { MdHistory } from 'react-icons/md';
import { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';

const FriendsDetails = () => {
    const params = useParams();
    // console.log(params);
    const friend = useLoaderData();
    // console.log(friend);
    const expectFriend = friend.find((fri => String(fri.id) === params.id));
    // console.log(expectFriend);
    // const [callDetails, setCallDetails] = useState([]);
    // const handleCall = (expectFriends) => {
    //     setCallDetails([...callDetails, expectFriends]);
    // }

    const { handleCall, handleText, handleVideo } = useContext(FriendsContext);

    return (
        <div>
            <div className='bg-base-300'>
                <div className="container mx-auto p-10 rounded-3xl pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                        <div className="space-y-6 text-center">
                            <div className="card p-6 border border-gray-100 bg-white rounded-3xl text-center space-y-4 shadow-sm">

                                <div className='flex justify-center items-center h-28 w-28 rounded-full overflow-hidden border-4 border-green-400 shadow-lg mx-auto'>
                                    <img src={expectFriend.picture} className='h-full w-full object-cover' alt={expectFriend.name} />
                                </div>
                                <h2 className='text-3xl font-extrabold text-gray-900'>{expectFriend.name}</h2>


                                <div className='text-center'>
                                    <div className={`${expectFriend.status === "overdue" ? 'badge-error' : 'badge-success'} badge uppercase text-[10px] font-bold px-4 py-1.5`}>
                                        {expectFriend.status}
                                    </div>
                                </div>
                                <div className='flex gap-2 justify-center'>
                                    <span className='badge badge-success bg-green-200 uppercase text-[10px] font-bold'>{expectFriend.gender}</span>
                                </div>
                                <p className='text-[#64748B]  text-sm'>{expectFriend.bio}</p>
                                <p className='text-xs text-gray-400'>Preferred : {expectFriend.email}</p>
                            </div>


                            <div className="card p-6 border border-gray-200 bg-white rounded-3xl space-y-3 shadow-sm">
                                <button className="btn btn-block btn-outline font-bold bg-gray-300 border-gray-200 flex text-[#1F2937] gap-2"><IoMdClock /> Snooze 2 Weeks</button>
                                <button className="btn btn-block btn-outline font-bold bg-gray-300 border-gray-100 flex gap-2 text-[#1F2937] "><IoMdArchive /> Archive</button>
                                <button className="btn btn-block btn-success font-bold btn-outline flex gap-2"><BiSolidTrash /> Delete</button>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2 space-y-8">

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="card p-6 border border-gray-100 bg-white rounded-2xl text-center shadow-sm">
                                    <h2 className="text-5xl font-bold text-[#244D3F]">{expectFriend.days_since_contact}</h2>
                                    <p className="text-gray-500 text-sm">Days Since Contact</p>
                                </div>
                                <div className="card p-6 border border-gray-100 bg-white rounded-2xl text-center shadow-sm">
                                    <h2 className="text-5xl font-bold text-[#244D3F]">{expectFriend.goal}</h2>
                                    <p className="text-gray-500 text-sm">Goal (Days)</p>
                                </div>
                                <div className="card p-6 border border-gray-100 bg-white rounded-2xl text-center shadow-sm">
                                    <h2 className="text-4xl font-bold text-[#244D3F]">{expectFriend.next_due_date}</h2>
                                    <p className="text-gray-500 text-sm">Next Due</p>
                                </div>
                            </div>


                            <div className="space-y-8">
                                <div className="flex justify-between p-6 border border-gray-100 bg-white rounded-2xl space-y-3 shadow-sm">
                                    <div>
                                        <h3 className="text-[#244D3F] font-bold py-2">Relationship Goal</h3>
                                        <p className="text-sm text-gray-600">Connect every  : <span className='font-bold text-gray-900'>{expectFriend.goal}</span></p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <button className="btn btn-sm btn-ghost border-gray-100  gap-1"> <FiEdit /> Edit</button>
                                    </div>
                                </div>
                                <div className="card p-6 border border-gray-100 bg-white rounded-2xl shadow-sm">
                                    <h3 className="text-[#244D3F] font-bold mb-3">Quick Check-In</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                        <div
                                            onClick={() => handleCall(expectFriend)}
                                            className='flex flex-col justify-center items-center py-4 btn h-full'>
                                            <FiPhoneCall className='h-5 w-5' />
                                            <button className=" btn-outline border-gray-100  text-[#244D3F]">Call</button>
                                        </div>

                                        <div
                                            onClick={() => handleText(expectFriend)}
                                            className='flex flex-col justify-center items-center py-4 btn h-full'>
                                            <IoMdText className='h-5 w-5' />
                                            <button className="border-gray-100 text-[#244D3F]">Text</button>
                                        </div>

                                        <div
                                            onClick={() => handleVideo(expectFriend)}
                                            className='flex flex-col justify-center items-center py-4 btn h-full'>
                                            <IoIosVideocam className='h-5 w-5' />
                                            <button className="border-gray-100 text-[#244D3F]">Video</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card p-6 border border-gray-100 bg-white rounded-2xl space-y-4 shadow-sm">
                                <div className='flex justify-between items-center p-2'>
                                    <h3 className="text-[#244D3F] font-bold">Recent Interactions</h3>
                                    <p className='text-[12px] btn font-medium '><MdHistory /> Full History</p>
                                </div>
                                <div className="space-y-3">

                                    <div className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-xl">
                                        <div className='flex gap-2'> Text</div>
                                        <p>Asked for career advice</p>
                                        <p className='text-gray-400'>Jan 28, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;