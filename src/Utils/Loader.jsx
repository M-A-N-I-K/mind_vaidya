

const Loader = () => {
    return (
        <div className="relative w-[100vw] bg-gradient-to-r from-gray-900 via-black to-gray-900 h-[100vh] flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500"></div>
            <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className="rounded-full h-28 w-28" />
        </div>
    )
}

export default Loader
