import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../Config/auth";
import getUser from '../Hooks/getUser';

const LoginSignUp = ({ showName, authName, showForgotPassword }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [user, loading] = getUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) setTimeout(navigate("/quiz"), [1000]);
    }, [user, loading]);

    const login = () => {
        logInWithEmailAndPassword(email, password);
    }

    const signup = () => {
        if (!name) {
            alert("Please enter name")
            return;
        };
        registerWithEmailAndPassword(name, email, password);
    }
    return (
        <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-50">
            <h1 className="font-bold mt-24 text-2xl">Welcome Back to Mind वैद्य :)</h1>
            <form className="flex flex-col bg-gray-700 rounded shadow-lg p-12 mt-12" action="">
                {
                    showName &&
                    <>
                        <label className="font-semibold text-xs" htmlFor="usernameField">Name</label>
                        <input className="flex items-center h-8 px-4 w-64 bg-gray-500 mt-2 rounded focus:outline-none focus:ring-2" type="text" placeholder='John Doe' onChange={() => setName(e.target.value)} />
                    </>
                }
                <label className="font-semibold mt-3 text-xs" htmlFor="usernameField">Username or Email</label>
                <input className="flex items-center h-8 px-4 w-64 bg-gray-500 mt-2 rounded focus:outline-none focus:ring-2" type="text" placeholder='johndoe@gmail.com' onChange={() => setEmail(e.target.value)} />
                <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                <input className="flex items-center h-8 px-4 w-64 bg-gray-500 mt-2 rounded focus:outline-none focus:ring-2" placeholder='*********' type="password" onChange={() => setPassword(e.target.value)} />
                <button className="flex items-center justify-center h-8 px-6 w-64 bg-indigo-600 mt-8 rounded font-semibold text-sm text-indigo-100 hover:bg-indigo-700" onClick={authName === "Login" ? login : signup}>{authName}</button>

                <button
                    type='button'
                    className="mt-2 px-4 py-2 border flex justify-center items-center  gap-2 border-slate-200 rounded-lg text-gray-50 hover:border-gray-200 hover:text-gray-100 hover:shadow transition duration-150">
                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span className='text-xs' onClick={signInWithGoogle}>{authName} with Google</span>
                </button>
                {
                    showForgotPassword &&
                    <div className="flex mt-6 justify-center text-xs">
                        <a className="text-indigo-400 hover:text-indigo-500" href="#">Forgot Password</a>
                        <span className="mx-2 text-gray-300">/</span>
                        <Link to="/signup" className="text-indigo-400 hover:text-indigo-500">Sign Up</Link>
                    </div>
                }

            </form>
        </div>

    );
}

export default LoginSignUp
