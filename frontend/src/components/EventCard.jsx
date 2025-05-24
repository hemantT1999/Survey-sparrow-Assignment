import React from "react";
import PropTypes from "prop-types";

export const EventCard = ({ event, onDelete }) => {
  return (
    <div className="event-card bg-white rounded-lg shadow p-2 sm:p-4 mb-2 border-l-4 border-blue-500">
      <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
        {event.title}
      </h3>
      {onDelete && (
        <button
          onClick={() => onDelete(event._id)}
          className="text-red-500 hover:text-red-700"
          aria-label="Delete event"
        >
          ×
        </button>
      )}
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  }).isRequired,
  onDelete: PropTypes.func,
};

export default EventCard;
