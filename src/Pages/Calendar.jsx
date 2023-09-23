import { useEffect, useRef, useState } from "react";
import CalendarRow from "../Utils/CalendarRow";

const Calendar = () => {
    const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
    const [activeMonthString, setActiveMonthString] = useState(
        new Date().toDateString().split(" ")[1]
    );
    const [activeYear, setActiveYear] = useState(new Date().getFullYear());
    const prevMonth = useRef(null);
    const [firstDayInMonth, setFirstDayInMonth] = useState([]);
    const [hideModal, setHideModal] = useState(false);

    useEffect(() => {
        let x = [];
        for (let i = 1; i <= 12; i++) {
            x.push(new Date(`${activeYear}/${i}/1`).getDay());
        }
        setFirstDayInMonth(x);
    }, [activeYear]);

    useEffect(() => {
        setActiveMonthString(
            new Date(new Date().setMonth(activeMonth)).toDateString().split(" ")[1]
        );
        //remember previous activeMonth
        //@ts-ignore
        prevMonth.current = activeMonth;
    }, [activeMonth]);

    return (
        <>
            <div className="md:shadow-lg md:rounded p-4 bg-gray-100 md:w-96 mx-4 md:mx-auto mt-32">
                <div className="w-full rounded">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-left font-bold text-xl text-black ">
                            {`${activeMonthString} ${activeYear}`}
                        </div>
                        <div className="flex space-x-4">
                            <button
                                className="p-2 rounded bg-blue-500 text-white"
                                onClick={() => {
                                    if (prevMonth.current === 0) {
                                        setActiveYear(activeYear - 1);
                                        setActiveMonth(11);
                                    } else {
                                        setActiveMonth(activeMonth - 1);
                                    }
                                }}
                            >
                                <svg
                                    width={15}
                                    height={15}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                className="p-2 rounded bg-blue-500 text-white"
                                onClick={() => {
                                    if (prevMonth.current === 11) {
                                        setActiveYear(activeYear + 1);
                                        setActiveMonth(0);
                                    } else {
                                        setActiveMonth(activeMonth + 1);
                                    }
                                }}
                            >
                                <svg
                                    width={15}
                                    height={15}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="-mx-2">
                        <table className="w-full text-black">
                            <thead>
                                <tr>
                                    <th className="py-3 px-2 md:px-3 ">S</th>
                                    <th className="py-3 px-2 md:px-3 ">M</th>
                                    <th className="py-3 px-2 md:px-3 ">T</th>
                                    <th className="py-3 px-2 md:px-3 ">W</th>
                                    <th className="py-3 px-2 md:px-3 ">T</th>
                                    <th className="py-3 px-2 md:px-3 ">F</th>
                                    <th className="py-3 px-2 md:px-3 ">S</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <CalendarRow
                                        firstDay={firstDayInMonth[activeMonth]}
                                        lastDayInMonth={new Date(
                                            activeYear,
                                            activeMonth + 1,
                                            0
                                        ).getDate()}
                                        row={0}
                                        hideModal={hideModal}
                                        setHideModal={setHideModal}
                                        currentMonth={activeMonth}
                                        currentYear={activeYear}
                                    />
                                </tr>
                                <tr>
                                    <CalendarRow
                                        firstDay={firstDayInMonth[activeMonth]}
                                        lastDayInMonth={new Date(
                                            activeYear,
                                            activeMonth + 1,
                                            0
                                        ).getDate()}
                                        hideModal={hideModal}
                                        setHideModal={setHideModal}
                                        row={1}
                                        currentMonth={activeMonth}
                                        currentYear={activeYear}
                                    />
                                </tr>
                                <tr>
                                    <CalendarRow
                                        firstDay={firstDayInMonth[activeMonth]}
                                        lastDayInMonth={new Date(
                                            activeYear,
                                            activeMonth + 1,
                                            0
                                        ).getDate()}
                                        hideModal={hideModal}
                                        setHideModal={setHideModal}
                                        row={2}
                                        currentMonth={activeMonth}
                                        currentYear={activeYear}
                                    />
                                </tr>
                                <tr>
                                    <CalendarRow
                                        firstDay={firstDayInMonth[activeMonth]}
                                        lastDayInMonth={new Date(
                                            activeYear,
                                            activeMonth + 1,
                                            0
                                        ).getDate()}
                                        hideModal={hideModal}
                                        setHideModal={setHideModal}
                                        row={3}
                                        currentMonth={activeMonth}
                                        currentYear={activeYear}
                                    />
                                </tr>
                                <tr>
                                    <CalendarRow
                                        firstDay={firstDayInMonth[activeMonth]}
                                        lastDayInMonth={new Date(
                                            activeYear,
                                            activeMonth + 1,
                                            0
                                        ).getDate()}
                                        row={4}
                                        hideModal={hideModal}
                                        setHideModal={setHideModal}
                                        currentMonth={activeMonth}
                                        currentYear={activeYear}
                                    />
                                </tr>
                                <tr>
                                    <CalendarRow
                                        firstDay={firstDayInMonth[activeMonth]}
                                        lastDayInMonth={new Date(
                                            activeYear,
                                            activeMonth + 1,
                                            0
                                        ).getDate()}
                                        row={5}
                                        hideModal={hideModal}
                                        setHideModal={setHideModal}
                                        currentMonth={activeMonth}
                                        currentYear={activeYear}
                                    />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${hideModal ? "hidden" : ""}`} id="modal">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h1>No Data to show</h1>
                            {/* <label className="font-medium text-gray-800">Name</label>
<input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
<label className="font-medium text-gray-800">Url</label>
<input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" /> */}
                        </div>
                        <div className="bg-gray-200 px-4 py-3 text-right">
                            <button onClick={() => setHideModal(!hideModal)} type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onclick="toggleModal()"><i className="fas fa-times"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calendar;