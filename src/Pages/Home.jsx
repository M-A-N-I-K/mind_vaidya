import React from 'react'
import Sidebar from '../Components/Sidebar'
import InputComponent from '../Components/InputComponent'
const Home = () => {
    return (
        <div className='flex w-[100vw] bg-gray-900 h-[100vh]'>
            <Sidebar />
            <InputComponent />
        </div>
    )
}

export default Home
