import React from 'react'
import { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import PotHoles from '../assets/Holes.png';
import Road from '../assets/Badroads.png';
import Trash from '../assets/Trash.png';
import Light from '../assets/Streetlight.png';

const UserIssue = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

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
    const filteredIssues = issues.filter(issue => {
        const matchCategory = category === 'All Categories' || issue.category === category;
        const matchStatus = status === 'All Status' || issue.status === status;
        const matchTime = time === 'All Time' || issue.time === time;
        return matchCategory && matchStatus && matchTime;
    });

    return (
        <div>
            <div className={`fixed md:relative z-20 w-64 bg-white text-black transition-all duration-300 ease-in-out ${sidebarOpen ? 'left-0' : '-left-full'} md:left-0 h-full`}>
                <div className="flex-col items-center justify-between p-4 border-b border-blue-700">
                    <Link to='/'><img src={Fixit} alt='logo' /></Link>
                    <h1 className="text-xl font-bold">Community Infrastructure platform</h1>
                    <button className="md:hidden" onClick={toggleSidebar}>
                        <FiX size={24} />
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li className='hover:bg-green-100  rounded-lg transition-colors'>
                            <a href="UserPage" className="flex items-center p-2">
                                <FiHome className="mr-3" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className='hover:bg-green-100 rounded-lg transition-colors'>
                            <a href="UserIssue" className="flex items-center p-2">
                                <RxPerson className="mr-3" />
                                <span>Issues</span>
                            </a>
                        </li>
                        <li className='hover:bg-green-100 rounded-lg transition-colors'>
                            <a href="#" className="flex items-center p-2">
                                <IoSettingsOutline className="mr-3" />
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <header className="md:hidden bg-blue shadow p-4 flex items-center">
                    <button onClick={toggleSidebar} className="mr-4">
                        <FiMenu size={24} />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                </header>
                <div>
                    {filteredIssues.map((issue, idx) => (
                        <div key={idx} className='flex flex-col sm:flex-row justify-between mt-[24px] mx-[66px] mb-[17px]'>
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
