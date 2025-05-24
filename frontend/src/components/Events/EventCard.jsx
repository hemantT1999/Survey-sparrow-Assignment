import React from "react";

export const EventCard = ({ event, onEventClick, onEventDelete }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    onEventDelete(event._id); // Use _id instead of id
  };

  return (
    <div
      className="p-2 rounded-md text-sm cursor-pointer text-white transition-all duration-200 hover:transform hover:scale-105 group relative"
      style={{ backgroundColor: event.color || "#3B82F6" }}
      onClick={() => onEventClick(event)}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold truncate">{event.title}</p>
        <button
          onClick={handleDelete}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2 hover:text-red-200"
          title="Delete event"
        >
          ×
        </button>
      </div>
    </div>
  );
};
