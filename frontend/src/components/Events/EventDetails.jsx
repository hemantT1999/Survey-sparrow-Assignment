// filepath: frontend/src/components/Events/EventDetails.jsx
import dayjs from "dayjs";

export const EventDetails = ({ event, onDelete, onClose }) => {
  if (!event) return null;

  const handleDelete = () => {
    onDelete(event._id); // Use _id instead of id
    onClose();
  };

  return (
    <div className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
        <div className="space-x-2">
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 transition-colors duration-200 px-3 py-1 rounded-md hover:bg-red-50"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            ×
          </button>
        </div>
      </div>
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {dayjs(event.date).format("MMMM D, YYYY")}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {event.time}
        </p>
        <p>
          <span className="font-semibold">Duration:</span> {event.duration}{" "}
          minutes
        </p>
        {event.description && (
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {event.description}
          </p>
        )}
        {event.type === "festival" && (
          <p className="text-sm text-purple-700 italic mt-2">
            This is a public holiday/observance.
          </p>
        )}
      </div>
    </div>
  );
};
