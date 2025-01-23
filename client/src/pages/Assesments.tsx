import React from 'react';

const Assessments: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent p-6 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-200">Assessments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-md w-full md:w-auto">
            Create Assessments +
          </button>

          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-2 w-full md:w-auto">
            <span>Generate using AI</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.5a7.25 7.25 0 1 1-6.5 10.5L3 17l4-1.25a7.25 7.25 0 1 1 2.75-12.25z"
              />
            </svg>
          </button> */}
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="flex text-black flex-col md:flex-row items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/5">
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/5">
          <option>Label</option>
          <option>HR</option>
          <option>Technical</option>
        </select>
      </div>

      {/* Table with Horizontal Scrolling on Mobile */}
      <div className="overflow-x-auto">
        <table className="w-full bg-transparent shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-transparent text-gray-700 text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Total Candidates</th>
              <th className="p-4">Created On</th>
              <th className="p-4">Created By</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {[
              'Assistant to Chief Executive Officer',
              'Data Analysis',
              'Business Skills',
              'Cognitive Skills',
              'Personality Test',
              'English Language Skills',
              'Interpersonal Skills',
              'Adaptability',
            ].map((assessment, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-700 cursor-pointer transition-all duration-150"
              >
                <td className="p-4">{assessment}</td>
                <td className="p-4 text-center">-</td>
                <td className="p-4">Oct 29, 8:43 PM</td>
                <td className="p-4">Bcsf21m526-ali Amir</td>
                <td className="p-4 text-right">
                  <button className="text-gray-500 hover:text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assessments;
