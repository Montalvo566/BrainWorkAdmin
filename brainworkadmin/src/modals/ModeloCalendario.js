import React, { useState } from "react";
import "../page/styles.css";
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "en-US" : require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay, 
    locales
})

const events = [
    {
        title : "Reunion",
        allDay : true,
        start : new Date(2023, 6, 0),
        end : new Date(2023, 6, 0)
    }
]

function ModeloCalendario() {

  return (
    <>
        <div>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height:500, margin:"50px"}}></Calendar>
        </div>
    </>
  );
}

export default ModeloCalendario;
