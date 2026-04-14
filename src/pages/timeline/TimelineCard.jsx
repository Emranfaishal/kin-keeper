import React from 'react';
import { FiPhoneCall, FiVideo } from 'react-icons/fi';
import { IoMdText } from 'react-icons/io';

const TimelineCard = ({ frd, type }) => {

    const icon = type === 'text' ? <IoMdText className='h-8 w-8 text-yellow-500' /> :
        type === 'video' ? <FiVideo className='h-8 w-8 text-blue-500' />
            : <FiPhoneCall className='h-8 w-8 text-green-500' />;

    const label = type === 'text' ? 'Text' : type === 'video' ? 'Video' : 'Call';


    return (
        <div className='flex items-center gap-4 border my-6 p-5 rounded-2xl border-gray-300 bg-base-200'>
            <div>{icon}</div>
            <div>
                <h2 className='text-[#244D3F] font-semibold'>
                    {label} <span className='text-[#64748B] font-medium text-[14px]'>With {frd.name}</span>
                </h2>
                <p className='text-[#64748B]'>{new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default TimelineCard;