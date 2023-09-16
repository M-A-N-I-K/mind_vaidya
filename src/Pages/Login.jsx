import React from 'react'
import googleImg from "../assets/google.png"
const Login = () => {
    return (
        <div className="relative h-[100vh] py-16 bg-gradient-to-br from-sky-50 to-gray-200">
            <div className="flex justify-center items-center relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="flex flex-col justify-center rounded-xl bg-white shadow-xl">
                        <div className="flex flex-col items-center justify-center space-y-1 p-12">
                            <img src={googleImg} loading="lazy" className="w-10" alt="Mind वैद्य logo" />
                            <h2 className="text-center mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the Mind वैद्य</h2>
                        </div>
                        <div className="p-12 grid space-y-4">
                            <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <img className="absolute left-0 w-5" src={googleImg} alt="google logo" />
                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
