import { Link } from 'react-router-dom';
import { logout } from '../Config/auth';
import { useState } from 'react';
import getUser from '../Hooks/getUser';

const Navbar = () => {
    const [user] = getUser();
    const [openNav, setOpenNav] = useState(false);
    return (
        <nav className="fixed w-[100vw] top-0 h-[10vh] px-4 py-4 flex justify-between items-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <Link className="text-3xl font-bold leading-none" to={`${user ? "/home" : "/"}`}>
                <h1 className='text-gray-50 font-bold text-lg'>Mind <span className='text-indigo-700'>वैद्य </span></h1>
            </Link>
            <div className="lg:hidden">
                <button onClick={() => setOpenNav(!openNav)} className="navbar-burger flex items-center text-gray-600 py-3">
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <ul className={`${openNav ? "hidden" : "absolute z-40 top-16  bg-gray-800 shadow-md w-[90vw] px-8 py-4"} lg:top-1/2 lg:left-1/2 rounded-md transform lg:-translate-y-1/2 lg:-translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6`}>
                <li>
                    <Link className="text-sm text-gray-50 hover:text-gray-100" to="/home">Journal</Link>
                </li>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li>
                    <Link className="text-sm text-gray-50 hover:text-gray-100" to="/calendar">Memories</Link>
                </li>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li>
                    <Link className="text-sm text-gray-50 hover:text-gray-100" to="/dashboard">Dashboard</Link>
                </li>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li>
                    <Link className="text-sm text-gray-50 hover:text-gray-100" to="/quiz">Quiz</Link>
                </li>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li>
                    <Link className="text-sm lg:w-12 text-gray-50 hover:text-gray-100" to="/expert-support">Expert Support</Link>
                </li>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li>
                    <Link className="text-sm text-gray-50 hover:text-gray-100" to="/pricing">Pricing</Link>
                </li>
            </ul>
            {!user ?
                <>
                    <Link className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-500 hover:bg-gray-600 text-sm text-gray-50 font-bold  rounded-xl transition duration-200" to="/">
                        Sign In
                    </Link>
                    <Link className="lg:inline-block py-2 px-6 bg-gray-800 hover:bg-gray-700 text-sm text-white font-bold rounded-xl transition duration-200" to="/signup">
                        Sign up
                    </Link>
                </> : <Link onClick={logout} className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-4 lg:px-6  bg-gray-800 hover:bg-gray-700 text-xs lg:text-sm text-white font-bold  rounded-xl transition duration-200" to="/">
                    Logout
                </Link>
            }
        </nav>

    )
}

export default Navbar;
