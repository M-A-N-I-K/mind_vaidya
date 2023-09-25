import { useState } from "react";
import getUser from "../Hooks/getUser"
import { getDocumentsForUserAndDate } from "../Config/userSuggestions";

const CalendarRow = ({
    firstDay,
    lastDayInMonth,
    row,
    hideModal,
    setHideModal,
    currentMonth,
    currentYear,
    setModalData
}) => {
    const activeDay = useState(new Date().getDate())[0];
    const [user] = getUser();
    let content = [];

    const handleModal = async (day) => {
        const month = currentMonth + 1;
        const dayStr = `${currentYear}-${month < 10 ? ("0" + month) : month}-${day}`;
        const docs = await getDocumentsForUserAndDate(user.email, dayStr);
        setModalData(docs?.data);
        setHideModal(!hideModal);
    }
    //first row with empty spaces
    if (!row) {
        for (let i = 0; i < firstDay; i++) {
            content.push(<td></td>);
        }
        content.push(
            <td key={1} onClick={() => handleModal(1)} className="cursor-pointer relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                1
            </td>
        );
        let len = 7 - content.length;
        for (let i = 1; i <= len; i++) {
            content.push(
                <>
                    {activeDay === i + 1 &&
                        new Date().getMonth() === currentMonth &&
                        new Date().getFullYear() === currentYear ? (
                        <td key={i} onClick={() => handleModal(i + 1)} className="cursor-pointer relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                            <span className="p-1 rounded-full border-blue-500 border-2">
                                {i + 1}
                            </span>
                        </td>
                    ) : (
                        <td key={i} onClick={() => handleModal(i + 1)} className="cursor-pointer relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                            {i + 1}
                        </td>
                    )}
                </>
            );
        }

        return <>{content}</>;
    }
    for (let i = 1; i <= 7; i++) {
        if (i + (7 * row - firstDay) <= lastDayInMonth) {
            content.push(
                <>
                    {activeDay === i + (7 * row - firstDay) &&
                        new Date().getMonth() === currentMonth &&
                        new Date().getFullYear() === currentYear ? (
                        <td key={i + (7 * row - firstDay)} onClick={() => handleModal(i + (7 * row - firstDay))} className="cursor-pointer relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                            <span className="p-1 rounded-full border-blue-500 border-2">
                                {i + (7 * row - firstDay)}
                            </span>
                        </td>
                    ) : (
                        <td key={i + (7 * row - firstDay)} onClick={() => handleModal(i + (7 * row - firstDay))} className="cursor-pointer relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                            {i + (7 * row - firstDay)}
                        </td>
                    )}
                </>
            );
        }
    }
    return <>
        {content}
    </>;
};

export default CalendarRow;