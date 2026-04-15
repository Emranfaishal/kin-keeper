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
            toast.error("Audio calling already calling...");
        }
        setIsCalling(!isCalling);
    }

    const handleText = (expectedFriends) => {
        if (!isCalling) {
            setTextDetails([...textDetails, expectedFriends]);
            toast.success(`${expectedFriends.name} Messages send`);
        } else {
            toast.error("Messages already send ....");
        }
        setIsCalling(!isCalling);
    }

    const handleVideo = (expectedFriends) => {
        if (!isCalling) {
            setVideoDetails([...videoDetails, expectedFriends]);
            toast.success("Video Calling ....");
        } else {
            toast.error("Video already calling ....");
        }
        setIsCalling(!isCalling);
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