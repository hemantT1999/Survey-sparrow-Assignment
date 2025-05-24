import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { EventCard } from "../Events/EventCard"; // Import EventCard

export const WeekView = ({ currentDate, events, onEventClick }) => {
  const [weekEvents, setWeekEvents] = useState([]);

  useEffect(() => {
    const startOfWeek = currentDate.startOf("week");
    const weekDays = Array.from({ length: 7 }, (_, i) =>
      startOfWeek.add(i, "day").format("YYYY-MM-DD")
    );

    const filteredEvents = events.filter((event) =>
      weekDays.includes(dayjs(event.date).format("YYYY-MM-DD"))
    );

    setWeekEvents(filteredEvents);
  }, [currentDate, events]);

  return (
    <div className="grid grid-cols-7 gap-2">
      {Array.from({ length: 7 }, (_, i) => (
        <div key={i} className="min-h-[500px] border rounded-lg p-2">
          <div className="font-bold text-gray-700">
            {currentDate.startOf("week").add(i, "day").format("ddd D")}
          </div>
          {weekEvents
            .filter((event) => dayjs(event.date).format("d") === String(i))
            .map((event, index) => (
              <EventCard // Use EventCard here
                key={index}
                event={event}
                onEventClick={onEventClick}
              />
            ))}
        </div>
      ))}
    </div>
  );
};
