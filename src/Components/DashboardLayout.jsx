import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import Fixit from '../assets/Fixitlogo.png';
import { FiMenu, FiX, FiHome } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxPerson } from 'react-icons/rx';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - fixed on all screens */}
      <div className={`fixed top-0 left-0 z-20 w-64 bg-white text-black h-screen transition-all duration-300 ease-in-out ${sidebarOpen ? 'left-0' : '-left-full'} md:left-0`}>
        <div className="flex-col items-center justify-between p-4 border-b border-blue-700">
          <Link to="/Homepage"><img src={Fixit} alt="logo" /></Link>
          <h1 className="text-xl font-bold">Community Infrastructure platform</h1>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li className={`hover:bg-green-100 rounded-lg transition-colors ${location.pathname === '/UserPage' ? 'bg-green-100' : ''}`}>
              <Link to="/UserPage" className="flex items-center p-2">
                <FiHome className="mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={`hover:bg-green-100 rounded-lg transition-colors ${location.pathname === '/UserIssue' ? 'bg-green-100' : ''}`}>
              <Link to="/UserIssue" className="flex items-center p-2">
                <RxPerson className="mr-3" />
                <span>My Issues</span>
              </Link>
            </li>
            <li className={`hover:bg-green-100 rounded-lg transition-colors ${location.pathname === '/Settings' ? 'bg-green-100' : ''}`}>
              <Link to="/Settings" className="flex items-center p-2">
                <IoSettingsOutline className="mr-3" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content - add left margin for fixed sidebar */}
      <div className="flex-1 md:ml-64">
        <header className="md:hidden bg-blue shadow p-4 flex items-center">
          <button onClick={toggleSidebar} className="mr-4">
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        </header>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
