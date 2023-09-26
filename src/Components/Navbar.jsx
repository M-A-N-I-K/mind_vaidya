import { Link } from 'react-router-dom';
import { logout } from '../Config/auth';
import { useState } from 'react';
import getUser from '../Hooks/getUser';

const Navbar = () => {
    const [user] = getUser();
    const [openNav, setOpenNav] = useState(false);

    return (
        <nav className="fixed z-[100] w-[100vw] top-0 px-4 py-4 flex justify-between items-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <Link className="leading-none text-gray-50 font-bold text-lg" to={`${user ? "/home" : "/"}`}>
                Mind <span className='text-indigo-700'>वैद्य</span>
            </Link>
            <div className="lg:hidden">
                <button onClick={() => setOpenNav(!openNav)} className="navbar-burger flex items-center text-gray-600 py-3">
                    <svg className={`block h-4 w-4 fill-current ${openNav ? 'text-gray-300' : 'text-gray-50'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <ul className={`${openNav ? "hidden" : "lg:flex"} ml-auto absolute z-40 top-16 bg-gray-800 font-bold shadow-md w-11/12 lg:w-auto lg:top-auto lg:bg-transparent lg:shadow-none lg:py-0 lg:relative`}>
                <li className='w-full lg:w-auto cursor-pointer hover:bg-gray-700 p-2 border-b-[1px] border-gray-50 md:border-none'>
                    <Link className="text-sm text-gray-50 hover:text-gray-100 px-4 py-2" to="/home">Journal</Link>
                </li>
                <li className='w-full lg:w-auto cursor-pointer hover:bg-gray-700 p-2 border-b-[1px] border-gray-50 md:border-none'>
                    <Link className="text-sm text-gray-50 hover:text-gray-100 px-4 py-2" to="/memories">Memories</Link>
                </li>
                <li className='w-full lg:w-auto cursor-pointer hover:bg-gray-700 p-2 border-b-[1px] border-gray-50 md:border-none'>
                    <Link className="text-sm text-gray-50 hover:text-gray-100 px-4 py-2" to="/dashboard">Dashboard</Link>
                </li>
                <li className='w-full lg:w-auto cursor-pointer hover:bg-gray-700 p-2 border-b-[1px] border-gray-50 md:border-none'>
                    <Link className="text-sm text-gray-50 hover:text-gray-100 px-4 py-2" to="/quiz">Quiz</Link>
                </li>
                <li className='w-full lg:w-auto cursor-pointer hover:bg-gray-700 p-2 border-b-[1px] border-gray-50 md:border-none'>
                    <Link className="text-sm lg:w-12 text-gray-50 hover:text-gray-100 px-4 py-2" to="/expert-support">Expert Support</Link>
                </li>
                <li className='w-full lg:w-auto cursor-pointer hover:bg-gray-700 p-2 border-b-[1px] border-gray-50 md:border-none'>
                    <Link className="text-sm text-gray-50 hover:text-gray-100 px-4 py-2" to="/pricing">Pricing</Link>
                </li>
            </ul>
            {!user ? (
                <>
                    <Link className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-500 hover:bg-gray-600 text-sm text-gray-50 font-bold rounded-xl transition duration-200" to="/">
                        Sign In
                    </Link>
                    <Link className="lg:inline-block py-2 px-6 bg-gray-700 hover:bg-gray-600 text-sm text-white font-bold rounded-xl transition duration-200" to="/signup">
                        Sign up
                    </Link>
                </>
            ) : (
                <Link onClick={logout} className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-4 lg:px-6 bg-gray-700 hover:bg-gray-600 text-xs lg:text-sm text-white font-bold rounded-xl transition duration-200" to="/">
                    Logout
                </Link>
            )}
        </nav>
    );
}

export default Navbar;
