import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import { GiEmptyWoodBucket } from "react-icons/gi";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Stats = () => {
    const { videoDetails, textDetails, callDetails } = useContext(FriendsContext);

    const data = [
        { name: "Call", value: callDetails?.length || 0, fill: "#0088FE" },
        { name: "Text", value: textDetails?.length || 0, fill: "#FF8042" },
        { name: "Video", value: videoDetails?.length || 0, fill: "#00C49F" },
    ];
    const totalData = data.reduce((sum, item) => sum + item.value, 0);
    return (
        <div className='p-10'>
            <h1 className='text-5xl font-bold mt-10 mb-10'>Friendship Analytics</h1>
            <div className='flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2  border-gray-200'>
                {totalData === 0 ? (
                    <div className="text-center space-y-1">
                        <div className="flex justify-center items-center">
                            <span className='text-7xl text-gray-400'><GiEmptyWoodBucket></GiEmptyWoodBucket></span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-400">No Conversation Found </h2>
                        <p className="text-gray-400">Start a quick check-in to see your stats!</p>
                    </div>)

                    : (
                        <div className="w-full h-130">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="60%"
                                        outerRadius="80%"
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={true}
                                    />
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Stats;