import React from 'react'
import Card from '../Utils/Card'

const Modal = ({ hideModal, setHideModal, modalData }) => {
    console.log(modalData);
    return (
        <div className="absolute top-0 left-0 z-[100] flex flex-col w-screen h-screen overflow-auto text-gray-50 bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-gray-800 bg-opacity-75">
                <span className='font-bold'>
                    Mind <span className='text-indigo-700'>वैद्य</span>
                </span>

                <button onClick={() => setHideModal(!hideModal)} type="button" className="py-2 px-4 ml-auto text-sm bg-gray-600 text-white rounded hover:bg-gray-500 mr-2" >
                    Back to Memories</button>
            </div>
            <div className="px-10 mt-6">
                <h1 className="text-2xl font-bold">Recommendations</h1>
            </div>
            <div className="flex flex-grow justify-between px-10 mt-4 space-x-6 overflow-auto">
                <div className="flex flex-col flex-shrink-0 w-72">
                    <div className="flex items-center flex-shrink-0 h-10 px-2">
                        <span className="block text-sm font-semibold">Songs</span>
                        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-gray-800 rounded bg-opacity-30">{modalData?.length}</span>

                    </div>
                    <div className="flex flex-col pb-2 overflow-auto">
                        {
                            modalData?.map((song, key) => {
                                return (
                                    <Card key={key} data={song.music} title={"Music"} timestamp={song.timestamp} />
                                );
                            })
                        }
                    </div>

                </div>
                <div className="flex flex-col flex-shrink-0 w-72">
                    <div className="flex items-center flex-shrink-0 h-10 px-2">
                        <span className="block text-sm font-semibold">Movies</span>
                        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-gray-800 rounded bg-opacity-30">{modalData.length}</span>

                    </div>
                    <div className="flex flex-col pb-2 overflow-auto">
                        {
                            modalData?.map((movie, key) => {
                                return (
                                    <Card key={key} data={movie.movie} title={"Movie"} timestamp={movie.timestamp} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col flex-shrink-0 w-72">
                    <div className="flex items-center flex-shrink-0 h-10 px-2">
                        <span className="block text-sm font-semibold">Todos</span>
                        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-gray-800 rounded bg-opacity-30">{modalData[0]?.todo.length ? modalData[0].todo.length : 0}</span>

                    </div>
                    <div className="flex flex-col pb-2 overflow-auto">
                        {
                            modalData?.map((data) => {
                                return (
                                    data.todo.map((task, key) => {
                                        console.log(task);
                                        return (
                                            <Card key={key} data={task} title={"Todo"} timestamp={data.timestamp} />
                                        );
                                    })
                                );
                            })
                        }
                    </div>
                </div>


                <div className="flex-shrink-0 w-6"></div>
            </div>




        </div>
    )
}

export default Modal
