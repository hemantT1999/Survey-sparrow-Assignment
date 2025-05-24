import React from "react";
import dayjs from "dayjs"; // Add this import
import { EventCard } from "../Events/EventCard";

export const MonthView = ({
  daysInMonth,
  currentDate,
  getEventsForDate,
  onEventClick,
  onEventDelete, // Add this prop
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 sm:gap-4">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div
          key={day}
          className="text-center font-bold text-gray-500 py-2 text-lg"
        >
          {day}
        </div>
      ))}
      {daysInMonth.map((day, index) => {
        const isToday =
          day && day.date.format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD");
        return (
          <div
            key={day ? day.date.toString() : `empty-${index}`}
            className={`border rounded-lg p-1 sm:p-2 min-h-[80px] sm:min-h-[100px] transition-all duration-300 ${
              isToday ? "transform hover:scale-105" : ""
            } ${
              day && day.isCurrentMonth
                ? "bg-white hover:shadow-lg"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {day ? (
              <>
                <div className={`flex justify-end mb-2`}>
                  <div
                    className={`${
                      isToday
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center transform scale-110 shadow-lg ring-2 ring-white"
                        : "text-right"
                    }`}
                  >
                    {day.date.date()}
                  </div>
                </div>
                <div className="space-y-1 overflow-y-auto max-h-[80px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {getEventsForDate(day.date).map((event) => (
                    <EventCard
                      key={event._id} // Use _id instead of fallback
                      event={event}
                      onEventClick={onEventClick}
                      onEventDelete={onEventDelete} // Add this prop
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="h-full"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
