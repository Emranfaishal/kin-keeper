import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='p-20'>
            <div className=" flex items-center justify-center py-20 bg-gray-50 rounded-3xl border-2  border-gray-200">
                <div className="text-center">
                    <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

                    <h2 className="mt-4 text-2xl font-semibold text-gray-700">
                        Page Not Found
                    </h2>

                    <p className="mt-2 text-gray-500 max-w-md mx-auto">
                        Oops! The page you are looking for doesn’t exist or has been moved.
                        Please check the URL or go back to the homepage.
                    </p>

                    <div className="mt-6">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-[#244D3F] transition"
                        > Go to Home </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;