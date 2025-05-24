import dayjs from "dayjs";
import { EventCard } from "../Events/EventCard"; // Import EventCard

export const DayView = ({ currentDate, events, onEventClick }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const dayEvents = events.filter(
    (event) =>
      dayjs(event.date).format("YYYY-MM-DD") ===
      currentDate.format("YYYY-MM-DD")
  );

  return (
    <div className="border rounded-lg">
      {hours.map((hour) => (
        <div key={hour} className="flex border-b min-h-[60px]">
          <div className="w-20 p-2 border-r text-sm text-gray-500">
            {`${hour}:00`}
          </div>
          <div className="flex-1 p-2">
            {dayEvents
              .filter((event) => parseInt(event.time.split(":")[0]) === hour)
              .map((event, index) => (
                <EventCard // Use EventCard here
                  key={index}
                  event={event}
                  onEventClick={onEventClick}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
