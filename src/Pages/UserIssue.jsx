import React, { useState } from 'react';
import Pothole from '../assets/Potholes.jpg'
import Light from '../assets/Streetlight.png'
import Roads from '../assets/Badroads.png'
import Trash from '../assets/Trash.png'

// Dummy data for issues
const issues = [
  {
    id: 1,
    title: 'Large pothole on Main Street',
    location: 'Anuoluwapo Estate Road F Panseke Abeokuta',
    description: 'Deep pothole causing traffic hazard near the intersection',
    image: Pothole ,
    status: 'Pending',
    comments: 8,
    likes: 24,
    date: '2023-11-15',
  },
  {
    id: 2,
    title: 'Broken Streetlight',
    location: 'Rounder Soyoye, Lafenwa Abeokuta',
    description: 'The area becomes dark posing safety risks for pedestrians',
    image: Light ,
    status: 'In Progress',
    comments: 8,
    likes: 18,
    date: '2023-10-14',
  },
  {
    id: 3,
    title: 'Bad Roads',
    location: 'Adigbe-opako, Abeokuta',
    description: 'The roads have worsened due to rainfall and lack of maintenance',
    image: Roads ,
    status: 'Pending',
    comments: 3,
    likes: 12,
    date: '2023-09-15',
  },
  {
    id: 4,
    title: 'Overflowing Trash Bin',
    location: 'Kuto Market, Abeokuta',
    description: 'Trash bin near the park has now turned to a dump place',
    image: Trash ,
    status: 'Pending',
    comments: 8,
    likes: 24,
    date: '2023-11-15',
  },
];

const statusColor = {
  'Pending': 'bg-yellow-100 text-yellow-600',
  'In Progress': 'bg-blue-100 text-blue-600',
  'Resolved': 'bg-green-100 text-green-600',
};

const MyIssues = () => {
  const [filter, setFilter] = useState('All Status');

  return (
    <div className="min-h-screen bg-white-100 px-4 md:px-10 py-6">
      {/* Header */}
      <div className="flex justify-between  items-center mb-6">
        <input
          type="text"
          placeholder="Search for issues..."
          className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-sm text-gray-600">John Samuel</div>
          <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm">
            JS
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-1">My Issues</h2>
      <p className="text-gray-500 mb-4">Track and manage issues you've reported or followed</p>

      {/* Filter */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-medium text-gray-700">Issues you’ve reported</h3>
        <select
          className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      {/* Issues List */}
      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
          >
            {/* Image */}
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full md:w-32 h-24 object-cover rounded-lg"
            />

            {/* Details */}
            <div className="flex-1 md:ml-4">
              <h4 className="text-md font-semibold text-gray-800">{issue.title}</h4>
              <p className="text-sm text-gray-600">{issue.location}</p>
              <p className="text-sm text-gray-500 mt-1">{issue.description}</p>

              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M5 15l7-7 7 7" />
                  </svg>
                  {issue.likes}
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                  </svg>
                  {issue.comments}
                </div>
              </div>
            </div>

            {/* Status & Date */}
            <div className="flex flex-col items-end gap-2 mt-2 md:mt-0">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[issue.status]}`}
              >
                {issue.status}
              </span>
              <span className="text-sm text-gray-400">{issue.date}</span>
            </div>
          </div>
        ))}
      </div>

 
      
    </div>
  );
};

export default MyIssues;
