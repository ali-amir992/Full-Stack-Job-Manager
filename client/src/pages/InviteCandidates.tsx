import React from 'react';
import Button from '../components/home/Button';
import { IoIosAddCircleOutline } from "react-icons/io";


const InviteCandidatesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-6 md:p-8 text-secondary">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-semibold text-gray-200">Assistant to Chief Executive Officer</h1>
                </div>
            </div>

            {/* Invite Candidates Section */}
            <div className="bg-gray-800 p-6 border-2 border-primary shadow-md mb-6">
                <h2 className="text-lg font-semibold text-gray-100 mb-4">Invite candidates</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input type="email" placeholder="Email address *" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <input type="text" placeholder="First name" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <input type="text" placeholder="Last name" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <div className="flex items-center gap-2">
                        <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-prm">
                            <option>+92</option>
                            {/* Add other country codes as options here */}
                        </select>
                        <input type="tel" placeholder="Phone number" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                </div>
                <div className='flex'>
                    <button className="flex items-center text-secondary mt-4 hover:underline">
                        <IoIosAddCircleOutline className="mr-1 hover" />
                        <span>Add more</span>
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-6 text-secondary">
                        <button className="underline">Copy public link</button>
                        <button className="underline">Bulk invite</button>
                    </div>
                    <Button active linkto='#' >Invite</Button>
                </div>
            </div>

            {/* All Candidates Section */}
            <div className="bg-gray-800 p-6 border-2 border-primary  shadow-md">
                <h2 className="text-lg font-semibold text-gray-100 mb-4">All candidates</h2>

                {/* Filters and Search Section */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/6 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Status</option>
                        {/* Additional options */}
                    </select>
                    <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/6 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Stage</option>
                        {/* Additional options */}
                    </select>
                    <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/6 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Grading</option>
                        {/* Additional options */}
                    </select>
                    <button className="text-gray-400 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 000-2h-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Candidates Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-richblack-5">
                                <th className="p-4 text-xl">Name</th>
                                <th className="p-4 text-xl">Invited On</th>
                                <th className="p-4 text-xl">Score</th>
                                <th className="p-4 text-xl">Grading</th>
                                <th className="p-4 text-xl">Status</th>
                                <th className="p-4 text-xl"></th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr className="border-b border-gray-700 hover:bg-gray-700">
                                <td className="p-4 text-sm">Ali Amir</td>
                                <td className="p-4 text-sm">Oct 30, 9:49 AM</td>
                                <td className="p-4 text-sm">40%</td>
                                <td className="p-4 text-sm">
                                    <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs">Beginner</span>
                                </td>
                                <td className="p-4 text-green-400 text-sm">Completed</td>
                                <td className="p-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            {/* Additional rows can be added here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InviteCandidatesPage;
