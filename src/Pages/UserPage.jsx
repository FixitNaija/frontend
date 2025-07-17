import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FiHome, FiClock, FiMenu, FiX } from 'react-icons/fi';
import { IoSettingsOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import Fixit from '../assets/Fixitlogo.png';
import { CiLocationOn } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdShowChart } from "react-icons/md";
import PotHoles from '../assets/Holes.png';
import Road from '../assets/Badroads.png';
import Trash from '../assets/Trash.png';
import Light from '../assets/Streetlight.png';
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [category, setCategory] = useState('All Categories');
    const [status, setStatus] = useState('All Status');
    const [time, setTime] = useState('All Time');
    // const [username, setUsername] = useState('');
    const [userData, setUserData] = useState({})
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState(null);


    useEffect(() => {
        // const storedUsername = localStorage.getItem('fixitnaija_username');
        // if (storedUsername) {
        //     setUsername(storedUsername);
        // }
        let savedToken = Cookies.get('token')
        if (savedToken) {
            const data = jwtDecode(savedToken)
            setUserData(data)
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const value = searchValue.trim().toLowerCase();
        if (!value) {
            setSearchResults(null); // Show all if search is empty
            return;
        }
        const results = issues.filter(issue =>
            issue.title.toLowerCase().includes(value) ||
            issue.location.toLowerCase().includes(value) ||
            issue.description.toLowerCase().includes(value)
        );
        setSearchResults(results);
    };

    const handleLike = idx => {
        setIssues(prevIssues => prevIssues.map((issue, i) => {
            if (i === idx) {
                if (!issue.liked) {
                    return { ...issue, likes: issue.likes + 1, liked: true };
                } else {
                    return { ...issue, likes: issue.likes - 1, liked: false };
                }
            }
            return issue;
        }));
    };

    const handleComment = idx => {
        setIssues(prevIssues => prevIssues.map((issue, i) => {
            if (i === idx) {
                if (!issue.commented) {
                    return { ...issue, comments: issue.comments + 1, commented: true };
                } else {
                    return { ...issue, comments: issue.comments - 1, commented: false };
                }
            }
            return issue;
        }));
    };

    // console.log(userData)
    // const toggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    // };

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

    // Filtering logic
    const filteredIssues = issues.filter(issue => {
        const matchCategory = category === 'All Categories' || issue.category === category;
        const matchStatus = status === 'All Status' || issue.status === status;
        const matchTime = time === 'All Time' || issue.time === time;
        return matchCategory && matchStatus && matchTime;
    });

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
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

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Mobile Header */}
                {/* <header className="md:hidden bg-blue shadow p-4 flex items-center">
                    <button onClick={toggleSidebar} className="mr-4">
                        <FiMenu size={24} />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                </header> */}

                {/* Dashboard Content */}
                <main className="container px-4 py-8">
                    <div className="w-full flex justify-between items-center p-4 bg-white shadow-sm">

                        {/* Search Box */}
                        <div onSubmit={handleSearch} className="flex items-center ">
                            <input
                                type="text"
                                placeholder="Search for issues..."
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                className="w-[700px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Right Side: Notification + Profile */}
                        <div className="flex items-center gap-2 sm:gap-4 justify-end">
                            <GoBell className="w-8 h-8 text-gray-600 cursor-pointer" />
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm">
                                    JS
                                </div>
                                <span className="text-gray-800 font-medium">John Samuel</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="pt-[10px] mb-8">
                            <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userData?.user?.name || 'User'}!</h1>
                            <p className="text-gray-600">Here's what's happening in your community.</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid sm:grid-col md:grid-6 lg:flex gap-4 mb-8  text-[12px] leading-[18px] font-medium ">
                            <StatCard title="Active Issues" value="10" className='w-[367px] h-[86px]' icon={<CiLocationOn size={20} />} />
                            <StatCard title="Resolved This Week" value="10" className='w-[367px] h-[86px]' icon={<IoMdCheckmarkCircleOutline size={20} color='lightgreen' />} />
                            <StatCard title="Average Response time" value="50 days" className='w-[367px] h-[86px]' icon={<FiClock size={20} color='lightpurple' />} />
                            <StatCard title="Community Engagement" value="10" className='w-[367px] h-[86px]' icon={<MdShowChart size={20} color='orange' />} />
                        </div>

                        {/* Recent Issues Section */}
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            {/* Filters */}
                            <div className="border-b border-gray-200 px-6 py-4 flex flex-wrap items-center gap-4">
                                <h2 className="text-lg font-semibold text-gray-800">Recent Issues</h2>
                                <div className="flex flex-wrap gap-2 ml-auto">
                                    <select
                                        className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                    >
                                        <option>All Categories</option>
                                        <option>Road Damage</option>
                                        <option>Electricity</option>
                                        <option>Water Supply</option>
                                        <option>Drainage</option>
                                        <option>Others</option>
                                    </select>
                                    <select
                                        className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={status}
                                        onChange={e => setStatus(e.target.value)}
                                    >
                                        <option>All Status</option>
                                        <option>Reported</option>
                                        <option>In Progress</option>
                                        <option>Resolved</option>
                                    </select>
                                    <select
                                        className="bg-gray-100 border border-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={time}
                                        onChange={e => setTime(e.target.value)}
                                    >
                                        <option>All Time</option>
                                        <option>Today</option>
                                        <option>This Week</option>
                                        <option>This Month</option>
                                    </select>
                                </div>
                            </div>

                            {/* Issues List */}
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
                                                    <button onClick={() => handleLike(originalIdx)} className={`flex items-center font-poppins font-normal text-[16px] leading-[28px] focus:outline-none ${issue.liked ? 'text-green-600' : 'text-gray-800'}`}>
                                                    <AiOutlineLike /> {issue.likes}
                                                </button>
                                                <button onClick={() => handleComment(originalIdx)} className={`flex items-center font-poppins font-normal text-[16px] leading-[28px] focus:outline-none ${issue.commented ? 'text-blue-600' : 'text-gray-800'}`}>
                                                    <BiComment /> {issue.comments}
                                                </button>
                                            </div>
                                            <p className='font-poppins font-normal text-[14px] leading-[22px] pr-[50px] sm:pr-[5px]'>{issue.date}</p>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                        </div>

                    </div>
            </div>
        </main>
            </div >
        </div >
    );
};

// Stat Card Component
const StatCard = ({ title, value, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 sm:p-4 sm:pr-6 flex  gap-2 md:gap-0 sm:gap-1 lg:gap-5 items-start w-full h-full min-h-[86px] hover:bg-[#A1EEAF] cursor-pointer">
            <div className="p-1 rounded-full bg-blue-100 text-blue-600 mr-1 flex-shrink-0">
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
            <div className="flex  items-start">
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
