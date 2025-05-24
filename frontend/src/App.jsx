import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Calendar } from "./components/Calendar/Calendar";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "./services/api";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      console.log("Fetched events:", response.data); // Add this line
      setEvents(response.data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleEventAdd = async (newEvent) => {
    try {
      const response = await createEvent({
        ...newEvent,
        id: Date.now(), // Temporary ID until backend responds
      });
      // Update state immediately with the new event
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          ...response.data,
          date: newEvent.date, // Ensure date property exists
        },
      ]);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleEventDelete = async (id) => {
    try {
      await deleteEvent(id);
      setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleEventUpdate = async (eventId, updatedData) => {
    try {
      const updatedEvent = await updateEvent(eventId, updatedData);
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === eventId ? updatedEvent.data : event
        )
      );
    } catch (error) {
      console.error("Failed to update event:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Calendar
          events={events}
          onEventAdd={handleEventAdd}
          onEventDelete={handleEventDelete}
          onEventUpdate={handleEventUpdate}
        />
      </div>
    </div>
  );
}

export default App;
