import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
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
        <div className='py-10'>
            <div className='py-8 flex flex-col items-center justify-center min-h-100'>
                {totalData === 0 ? (
                    <div className="text-center space-y-1">
                        {/* <div className="flex justify-center items-center">
                            <img src="" className='h-50 w-50' alt="" />
                        </div> */}
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