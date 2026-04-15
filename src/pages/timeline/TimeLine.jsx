import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import TimelineCard from './TimelineCard';
import { CiNoWaitingSign } from "react-icons/ci";

const TimeLine = () => {
    const { callDetails, textDetails, videoDetails } = useContext(FriendsContext);

    const [filter, setFilter] = useState('all');



    const hasCalls = callDetails.length > 0;
    const hasTexts = textDetails.length > 0;
    const hasVideos = videoDetails.length > 0;

    const isDataEmpty =
        (filter === 'all' && !hasCalls && !hasTexts && !hasVideos) ||
        (filter === 'call' && !hasCalls) ||
        (filter === 'text' && !hasTexts) ||
        (filter === 'video' && !hasVideos);

    return (
        <div className='container mx-auto px-4 h-full py-5'>
            <div className='border border-gray-50 p-5 rounded-2xl'>
                <div>
                    <h2 className='text-4xl mb-3 font-bold text-[#1F2937]'>Timeline</h2>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn text-gray-500 m-1">Timeline by {filter === "all" ? "⬇️" : filter === "call" ? "call"
                                : filter === "text" ? "text" : "video"} </div>

                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100  rounded-box p-2 shadow-sm">
                                <li onClick={() => setFilter('all')}><a>All List</a></li>
                                <li onClick={() => setFilter('call')}><a>Call List</a></li>
                                <li onClick={() => setFilter('text')}><a>Messages List</a></li>
                                <li onClick={() => setFilter('video')}><a>Video List</a></li>

                            </ul>
                        </div>
                        <div>
                            <input type="text" placeholder="Type here" className="input" />
                        </div>
                    </div>

                </div>
            </div>

            {isDataEmpty && <div>
                <div className='flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2  border-gray-200'>

                    <span className='text-7xl text-gray-500 '><CiNoWaitingSign></CiNoWaitingSign></span>

                    <h3 className='text-xl font-semibold text-gray-500'>No {filter === 'all' ? 'Interactions'
                        : filter === "call" ? "Call Interactions"
                            : filter === "text" ? "Text Interactions"
                                : "Video Interactions"} Found</h3>

                    <p className='text-gray-400'>There's nothing to show in your timeline right now.</p>
                </div>
            </div>}

            <div className='space-y-4'>
                {
                    (filter === 'all' || filter === 'call') &&
                    callDetails.map(frd => <TimelineCard frd={frd} type="call" key={frd.id}></TimelineCard>)
                }

                {
                    (filter === 'all' || filter === 'text') &&
                    textDetails.map(frd => <TimelineCard frd={frd} type="text" key={frd.id}></TimelineCard>)
                }

                {
                    (filter === 'all' || filter === 'video') &&
                    videoDetails.map(frd => <TimelineCard frd={frd} type="video" key={frd.id}></TimelineCard>)
                }
            </div>
        </div>
    );
};

export default TimeLine;