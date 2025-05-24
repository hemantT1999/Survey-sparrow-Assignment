import { useEffect, useState } from "react";
import { MonthView } from "./MonthView";
import { WeekView } from "./WeekView";
import { DayView } from "./DayView";
import { useCalendar } from "../../hooks/useCalendar";
import { Button } from "../UI/Button";
import { EventForm } from "../Events/EventForm";
import { Modal } from "../UI/Modal";
import { getFestivals } from "../../utils/festivals";
import { EventDetails } from "../Events/EventDetails";
import { getMonthDays } from "../../utils/dateUtils";
import { createEvent } from "../../services/api";

export const Calendar = ({
  events: initialEvents,
  onEventAdd,
  onEventDelete,
}) => {
  const [events, setEvents] = useState(initialEvents);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [festivals, setFestivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents]);

  const { currentDate, viewMode, getEventsForDate, navigate, setViewMode } =
    useCalendar(initialEvents);

  const daysInMonth = getMonthDays(currentDate);

  useEffect(() => {
    const loadFestivals = () => {
      setIsLoading(true);
      try {
        const currentYear = new Date().getFullYear();
        const festivalEvents = getFestivals(currentYear);
        setFestivals(festivalEvents);
      } catch (error) {
        console.error("Failed to load festivals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFestivals();
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventDetailsModal(true);
  };

  const handleCloseEventDetailsModal = () => {
    setSelectedEvent(null);
    setShowEventDetailsModal(false);
  };

  const handleEventAdd = async (eventData) => {
    try {
      const newEvent = await createEvent(eventData);
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setShowEventForm(false);
      if (onEventAdd) onEventAdd(newEvent);
    } catch (error) {
      console.error("Failed to create event:", error);
    }
  };

  const handleEventDelete = async (eventId) => {
    try {
      await onEventDelete(eventId);
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event._id !== eventId)
      );
      setShowEventDetailsModal(false);
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-100 via-teal-100 to-violet-200">
      <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 max-w-7xl mx-auto border border-white/20">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-black bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent animate-text">
            {currentDate.format("MMMM YYYY")}
          </h2>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => setShowEventForm(true)}
              className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-2.5 rounded-full font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-fuchsia-500/25"
            >
              + Add Event
            </Button>

            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className="rounded-lg border-2 border-indigo-200 px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200"
            >
              {["month", "week", "day"].map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>

            <div className="flex space-x-2">
              <Button
                onClick={() => navigate(-1)}
                className="bg-gradient-to-r from-gray-600 to-gray-700"
              >
                Previous
              </Button>
              <Button
                onClick={() => navigate(1)}
                className="bg-gradient-to-r from-gray-600 to-gray-700"
              >
                Next
              </Button>
            </div>
          </div>
        </div>

        {viewMode === "month" && (
          <MonthView
            daysInMonth={daysInMonth}
            currentDate={currentDate}
            getEventsForDate={getEventsForDate}
            onEventClick={handleEventClick}
            onEventDelete={onEventDelete}
          />
        )}

        {viewMode === "week" && (
          <WeekView
            currentDate={currentDate}
            events={events}
            onEventClick={handleEventClick}
          />
        )}

        {viewMode === "day" && (
          <DayView
            currentDate={currentDate}
            events={events}
            onEventClick={handleEventClick}
          />
        )}

        <Modal
          isOpen={showEventForm}
          onClose={() => setShowEventForm(false)}
          title="Add New Event"
        >
          <EventForm
            onSubmit={handleEventAdd}
            onCancel={() => setShowEventForm(false)}
          />
        </Modal>

        <Modal
          isOpen={showEventDetailsModal}
          onClose={handleCloseEventDetailsModal}
          title="Event Details"
        >
          <EventDetails
            event={selectedEvent}
            onClose={handleCloseEventDetailsModal}
            onDelete={handleEventDelete}
          />
        </Modal>
      </div>
    </div>
  );
};
