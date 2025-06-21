import { useState } from 'react';
import { FiHome, FiAlertCircle, FiClock, FiUsers, FiMenu, FiX } from 'react-icons/fi';
import { IoSettingsOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import Fixit from '../assets/Fixitlogo.png'
import { Link } from 'react-router'
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed md:relative z-20 w-64 bg-white-800 text-black transition-all duration-300 ease-in-out ${sidebarOpen ? 'left-0' : '-left-full'} md:left-0 h-full`}>
        <div className="flex-col items-center justify-between p-4 border-b border-blue-700">
          <Link to='/'><img src={Fixit} alt='logo'/></Link>
          <h1 className="text-xl font-bold">Community Infrastructure platform</h1>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg bg-lightgreen-700">
                <FiHome className="mr-3" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-lightgreen-700">
                <RxPerson className="mr-3" />
                <span>Issues</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-lightgreen-700">
                <IoSettingsOutline className="mr-3" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <header className="md:hidden bg-white shadow p-4 flex items-center">
          <button onClick={toggleSidebar} className="mr-4">
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        </header>

        {/* Dashboard Content */}
        <main className="container px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Welcome back, John!  </h1>
              <p className="text-gray-600">Here's what's happening in your community.</p>
            </div>

            {/* Stats Cards */}
            <div className="flex gap-10 mb-8  text-[12px] leading-[18px] font-medium ">
              <StatCard title="Active Issues" value="10" className='w-[367px] h-[86px]' icon={<FiAlertCircle size={20} />} />
              <StatCard title="Resolved This Week" value="10"  className='w-[367px] h-[86px]' icon={<FiClock size={20} />} />
              <StatCard title="Average Response time" value="50 days" className='w-[367px] h-[86px]' icon={<FiClock size={20} />} />
              <StatCard title="Community Engagement" value="10"  className='w-[367px] h-[86px]' icon={<FiUsers size={20} />} />
            </div>

            {/* Recent Issues Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Filters */}
              <div className="border-b border-gray-200 px-6 py-4 flex flex-wrap items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Issues</h2>
                <div className="flex flex-wrap gap-2 ml-auto">
                  <select className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Categories</option>
                  </select>
                  <select className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Status</option>
                  </select>
                  <select className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Time</option>
                  </select>
                </div>
              </div>

              {/* Issues List */}
              <div className="divide-y divide-gray-200">
                <IssueItem 
                  title="Large pothole on Main Street" 
                  location="Anuoluwapo Estate Road F Panseke Abeokuta" 
                  description="Deep pothole causing traffic hazard near the intersection" 
                  stats={[24, 8]} 
                  date="2023-11-15" 
                />
                <IssueItem 
                  title="Broken Streetlight" 
                  location="Rounder Soyeye, Lafenwa Abeokuta" 
                  description="The area becomes dark posing safety risks for pedestrians" 
                  stats={[18, 8]} 
                  date="2023-10-14" 
                />
                <IssueItem 
                  title="Bad Roads" 
                  location="Adigbe-opako, Abeokuta" 
                  description="The roads have worsen due to rainfall and lack of maintenance" 
                  stats={[12, 3]} 
                  date="2023-09-15" 
                />
                <IssueItem 
                  title="Overflowing Trash Bin" 
                  location="Kuto Market, Abeokuta" 
                  description="Trash bin near the park has now turned to a dump place" 
                  stats={[24, 8]} 
                  date="2023-11-15" 
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-start">
      <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

// Issue Item Component
const IssueItem = ({ title, location, description, stats, date }) => {
  return (
    <div className="p-6 hover:bg-gray-50">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{location}</p>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {stats[0]}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {stats[1]}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
