import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent() {
    const [date, changeDate] = useState(new Date());

    function changeValue(val) {
        changeDate(val);
    }

    return (
        <div className="flex flex-col h-[90vh] w-[100vw] justify-center items-center">
            <Calendar
                onChange={changeValue}
                value={date}
                minDate={new Date(2022, 8, 21)} // To set minimum date
                maxDate={new Date(2025, 12, 22)} // To set maximum date
                showWeekNumbers={true} // TO show week numbers
                showNeighboringMonth={true}
                calendarType="US" // Changing the calender type
                tileDisabled={({ date }) => date.getDay() === 0} // Disabaling the sunday
            />

            <p>The selected date is - {date.toLocaleDateString()}</p>
        </div>
    );
}

export default CalendarComponent;