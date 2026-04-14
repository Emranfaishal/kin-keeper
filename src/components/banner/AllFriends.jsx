import { useLoaderData } from "react-router";
import FriendCards from "./FriendCards";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners"

const AllFriends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (friends) {
            setTimeout(() => {
                setLoading(false);
            },1000);
        }
    }, [friends]);

    return (
        <div className="container mx-auto">
            <hr className="mt-10 mb-10 text-gray-300" />
            <h2 className="text-2xl font-bold">Your Friends</h2>

            {
                loading ? <div className="p-20 text-center text-[#244D3F]">
                    <span> <HashLoader color="#244D3F" /></span>
                </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mb-10">
                        {
                            friends.map((friend, ind) => {
                                return <div key={ind} >

                                    <FriendCards friend={friend}></FriendCards>

                                </div>
                            })
                        }
                    </div>
            }
        </div>
    );
};

export default AllFriends;