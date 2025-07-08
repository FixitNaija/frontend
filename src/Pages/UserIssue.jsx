import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import PotHoles from '../assets/Holes.png';
import Road from '../assets/Badroads.png';
import Trash from '../assets/Trash.png';
import Light from '../assets/Streetlight.png';
import { GoBell, GoSearch } from "react-icons/go";
import Fixit from '../assets/Fixitlogo.png';
import { FiMenu, FiX, FiHome } from 'react-icons/fi';
import { IoSettingsOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";

const UserIssue = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const issues = [
        {
            img: PotHoles,
            title: 'Large pothole on Main Street',
            location: 'Anuoluwapo Estate Road F Panseke Abeokuta',
            description: 'Deep pothole causing traffic hazard near the intersection',
            likes: 24,
            comments: 8,
            date: '2023-11-15',
            category: 'Road Damage',
            status: 'Reported',
            time: 'This Month',
        },
        {
            img: Light,
            title: 'Broken Streetlight',
            location: 'Rounder Soyeye, Lafenwa Abeokuta',
            description: 'The area becomes dark posing safety risks for pedestrians',
            likes: 18,
            comments: 8,
            date: '2023-10-14',
            category: 'Electricity',
            status: 'In Progress',
            time: 'This Month',
        },
        {
            img: Road,
            title: 'Bad Roads',
            location: 'Adigbe-opako, Abeokuta',
            description: 'The roads have worsen due to rainfall and lack of maintenance',
            likes: 12,
            comments: 3,
            date: '2023-09-15',
            category: 'Road Damage',
            status: 'Resolved',
            time: 'This Month',
        },
        {
            img: Trash,
            title: 'Overflowing Trash Bin',
            location: 'Kuto Market, Abeokuta',
            description: 'Trash bin near the park has now turned to a dump place',
            likes: 24,
            comments: 8,
            date: '2023-11-15',
            category: 'Others',
            status: 'Reported',
            time: 'Today',
        },
    ];
    // Responsive search bar state


    const filteredIssues = issues.filter(issue => {
        const currentDate = new Date();
        const issueDate = new Date(issue.date);
        const timeDifference = currentDate - issueDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (issue.time === 'Today') {
            return daysDifference === 0;
        } else if (issue.time === 'This Month') {
            return issueDate.getMonth() === currentDate.getMonth() && issueDate.getFullYear() === currentDate.getFullYear();
        }
        return false;
    });

    // Handle search (customize as needed)
    const handleSearch = (e) => {
        e.preventDefault();
        // Add your search logic here
        // console.log('Searching for:', searchValue);
    };

    return (
        <div>
            {/* <div className={`fixed md:relative z-20 w-64 bg-white text-black transition-all duration-300 ease-in-out ${sidebarOpen ? 'left-0' : '-left-full'} md:left-0 h-full`}>
                <div className="flex-col items-center justify-between p-4 border-b border-blue-700">
                    <Link to='/Homepage'><img src={Fixit} alt='logo' /></Link>
                    <h1 className="text-xl font-bold">Community Infrastructure platform</h1>
                    <button className="md:hidden" onClick={toggleSidebar}>
                        <FiX size={24} />
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li className='hover:bg-green-100  rounded-lg transition-colors'>
                            <Link to="/UserPage" className="flex items-center p-2">
                                <FiHome className="mr-3" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className='hover:bg-green-100 rounded-lg transition-colors'>
                            <Link to="/UserIssue" className="flex items-center p-2">
                                <RxPerson className="mr-3" />
                                <span>Issues</span>
                            </Link>
                        </li>
                        <li className='hover:bg-green-100 rounded-lg transition-colors'>
                            <a href="#" className="flex items-center p-2">
                                <IoSettingsOutline className="mr-3" />
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> */}
            <div>
                {/* <header className="md:hidden bg-blue shadow p-4 flex items-center">
                    <button onClick={toggleSidebar} className="mr-4">
                        <FiMenu size={24} />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                </header> */}
                <div>
                    <div className="w-full flex flex-row sm:justify-between sm:items-center p-2 bg-white shadow-sm gap-2 overflow-x-auto">
                        {/* Search Box */}
                        <div className="flex-1 flex items-center min-w-0 mb-2 sm:mb-0">
                            <form onSubmit={handleSearch} className="w-full flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search for issues..."
                                    value={searchValue}
                                    onChange={e => setSearchValue(e.target.value)}
                                    className={`hidden sm:block w-full max-w-full sm:w-[350px] md:w-[500px] lg:w-[700px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${showMobileSearch ? 'sm:block' : ''}`}
                                />
                                <button
                                    type="button"
                                    className="sm:hidden p-2 rounded-full border border-gray-300 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setShowMobileSearch(prev => !prev)}
                                >
                                    <GoSearch className="w-5 h-5" />
                                </button>
                                {/* Show input on mobile if toggled */}
                                {showMobileSearch && (
                                    <input
                                        type="text"
                                        placeholder="Search for issues..."
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                        autoFocus
                                        className="block sm:hidden w-full px-4 py-2 ml-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onBlur={() => setShowMobileSearch(false)}
                                    />
                                )}
                            </form>
                        </div>
                        {/* Right Side: Notification + Profile */}
                        <div className="flex items-center gap-2 sm:gap-4 justify-end">
                            <GoBell className="w-5 h-5 text-gray-600 cursor-pointer" />
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm">
                                    JS
                                </div>
                                <span className="text-gray-800 font-medium hidden xs:inline-block">John Samuel</span>
                            </div>
                        </div>
                    </div>

                    {/* {filteredIssues.map((issue, idx) => ( */}
                    {issues.map((issue, idx) => (
                        <div key={idx} className=' w-full flex flex-col sm:flex-row justify-between align-center mt-2 sm:mx-4 mb-2 gap-1 sm:gap-2'>
                            <div>
                                <img src={issue.img} alt={issue.title} />
                            </div>
                            <div>
                                <h2 className='font-poppins font-medium  text-[20px] leading-[38px]'>{issue.title}</h2>
                                <p className='font-poppins font-normal text-[16px] leading-[28px]'>{issue.location}</p>
                                <p className='font-poppins font-normal text-[16px] leading-[28px]'>{issue.description}</p>
                                <div className='flex justify-between '>
                                    <div className='flex gap-[12px]'>
                                        <p className='flex items-center font-poppins font-normal text-[16px] leading-[28px]'><AiOutlineLike /> {issue.likes}</p>
                                        <p className='flex items-center font-poppins font-normal text-[16px] leading-[28px]'><BiComment /> {issue.comments}</p>
                                    </div>
                                    <p className='font-poppins font-normal text-[14px] leading-[22px] pr-[50px] sm:pr-[5px]'>{issue.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default UserIssue
