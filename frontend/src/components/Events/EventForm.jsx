import React, { useState } from "react";
import { Button } from "../UI/Button";

export const EventForm = ({ onSubmit, onCancel }) => {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    type: "reminder", // Default type
    color: "#3B82F6", // Default color
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...eventData,
      date: new Date(
        eventData.date + (eventData.time ? "T" + eventData.time : "T00:00:00")
      ).toISOString(),
      time: eventData.time || "00:00", // Ensure time is never empty
    };
    onSubmit(formattedData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add New Event
      </h2>

      <div className="space-y-4">
        <div className="relative">
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
            placeholder="Enter event title"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="type"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Event Type
          </label>
          <select
            id="type"
            name="type"
            value={eventData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200 bg-white"
          >
            <option value="reminder">⏰ Reminder</option>
            <option value="birthday">🎂 Birthday</option>
            <option value="interview">💼 Interview</option>
            <option value="festival">🎉 Festival</option>
            <option value="trip">✈️ Trip</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="time"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="color"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Color
          </label>
          <input
            type="color"
            id="color"
            name="color"
            value={eventData.color}
            onChange={handleChange}
            className="mt-1 h-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
            placeholder="Add event details..."
          ></textarea>
        </div>
      </div>

      <div className="flex space-x-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
        >
          Add Event
        </button>
      </div>
    </form>
  );
};
