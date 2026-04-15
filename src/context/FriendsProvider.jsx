import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';
import { toast } from 'react-toastify';


const FriendsProvider = ({ children }) => {
    const [callDetails, setCallDetails] = useState([]);
    const [textDetails, setTextDetails] = useState([]);
    const [videoDetails, setVideoDetails] = useState([]);
    const [isCalling, setIsCalling] = useState(false);

    const handleCall = (expectedFriends) => {
        if (!isCalling) {
            setCallDetails([...callDetails, expectedFriends]);
            toast.success("Audio Calling..");
        } else {
            toast.error("Audio end...");
        }
        setIsCalling(!isCalling);
    }

    const handleText = (expectedFriends) => {
        setTextDetails([...textDetails, expectedFriends]);
        toast.success(`${expectedFriends.name} Text send`);
    }

    const handleVideo = (expectedFriends) => {
        setVideoDetails([...videoDetails, expectedFriends]);
        toast.success("Video Calling..");
    }

    const data = {
        handleCall,
        setCallDetails,
        callDetails,
        handleText,
        textDetails,
        handleVideo,
        videoDetails,
        setVideoDetails

    }
    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
};

export default FriendsProvider;