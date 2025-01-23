import React from 'react';

const IndividualAssessmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="text-gray-400 hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold">Assistant to Chief Executive Officer</h1>
          <div className="flex gap-2 text-sm text-gray-400">
            <span>10 score</span>•<span>1 test</span>•<span>40 mins</span>
          </div>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700">Preview</button>
          <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700">Edit</button>
          <button className="text-gray-400 hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-4">Overview</h2>
        <p className="text-gray-400 mb-4">
          This assessment is designed to evaluate the skills necessary for the Assistant to CEO role, including analytical, interpersonal, and organizational skills.
        </p>
        <div className="flex gap-4 text-gray-400 text-sm">
          <span><strong>Created On:</strong> Oct 29, 2023</span>
          <span><strong>Difficulty:</strong> Intermediate</span>
          <span><strong>Pass Criteria:</strong> 70%</span>
        </div>
      </div>

      {/* Candidate Management Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-4">Invite Candidates</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input type="email" placeholder="Email address *" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="First name" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Last name" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="flex items-center gap-2">
            <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>+92</option>
              {/* Add other country codes */}
            </select>
            <input type="tel" placeholder="Phone number" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <button className="text-blue-400 hover:underline">+ Add more</button>

        <div className="flex justify-between mt-4">
          <div className="flex gap-6 text-blue-400">
            <button className="hover:underline">Copy public link</button>
            <button className="hover:underline">Bulk invite</button>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md">
            Invite
          </button>
        </div>
      </div>

      {/* All Candidates Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-4">All Candidates</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <input type="text" placeholder="Search" className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/6 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Status</option>
          </select>
          <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/6 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Stage</option>
          </select>
          <select className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-1/2 md:w-1/6 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Grading</option>
          </select>
        </div>

        {/* Candidates Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-700 text-gray-400">
                <th className="p-4 text-sm">Name</th>
                <th className="p-4 text-sm">Invited On</th>
                <th className="p-4 text-sm">Score</th>
                <th className="p-4 text-sm">Grading</th>
                <th className="p-4 text-sm">Status</th>
                <th className="p-4 text-sm"></th>
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
              {/* Additional rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndividualAssessmentPage;
