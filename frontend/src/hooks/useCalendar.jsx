import { useState, useMemo } from "react";
import dayjs from "dayjs";
import { getMonthDays } from "../utils/dateUtils";

export const useCalendar = (events) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [viewMode, setViewMode] = useState("month"); // Add this line

  const daysInMonth = useMemo(() => getMonthDays(currentDate), [currentDate]);

  const getEventsForDate = (date) => {
    if (!Array.isArray(events)) return [];
    return events.filter((event) => {
      if (!event || !event.date) return false;
      const eventDate = dayjs(event.date).format("YYYY-MM-DD");
      const calendarDate = date.format("YYYY-MM-DD");
      return eventDate === calendarDate;
    });
  };

  const navigate = (direction) => {
    switch (viewMode) {
      case "month":
        setCurrentDate(currentDate.add(direction, "month"));
        break;
      case "week":
        setCurrentDate(currentDate.add(direction, "week"));
        break;
      case "day":
        setCurrentDate(currentDate.add(direction, "day"));
        break;
    }
  };

  return {
    currentDate,
    viewMode,
    daysInMonth,
    getEventsForDate,
    navigate,
    setViewMode,
  };
};
