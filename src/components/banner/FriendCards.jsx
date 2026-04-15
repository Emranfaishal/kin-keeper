import React from 'react';
import { Link } from 'react-router';

const FriendCards = ({ friend }) => {
    // console.log(friend);     
    return (
        <Link to={`/${friend.id}`} className="card bg-base-100 w-full shadow-lg hover-3d">
            <figure className="px-10 pt-10">
                <img
                    src={friend.picture}
                    alt="Shoes"
                    className="rounded-full hover-3d" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{friend.name}</h2>
                <p>{friend.days_since_contact}d ago</p>
                <div>
                    {friend.tags.map((tag, ind) => <div key={ind} className="badge mx-1 bg-green-200 text-green-500 font-semibold badge-success">{tag}</div>)}
                </div>
                <div>
                    <p className={`mb-10 ${friend.status === "overdue" ? "badge badge-error" : friend.status === "almost due" ? "badge badge-warning" : "badge badge-success"}`}>{friend.status}</p>
                </div>
            </div>
        </Link>

    );
};

export default FriendCards;