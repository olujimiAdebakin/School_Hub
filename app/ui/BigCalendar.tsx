"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { scheduledEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

// Use moment localizer instead of globalize as it's more commonly used and better supported
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="h-screen p-4">
      <Calendar
        localizer={localizer}
        events={scheduledEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day", "agenda"]}
        view={view}
        style={{ height: "calc(100vh - 2rem)" }}
        onView={handleOnChangeView}
        min={new Date(2024, 10, 11, 8, 0, 0)} // Note: Month is 0-based (10 = November)
        max={new Date(2024, 10, 11, 18, 0, 0)} // Changed to 6:00 PM and fixed the month
      />
    </div>
  );
};

export default BigCalendar;
