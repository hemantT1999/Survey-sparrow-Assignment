import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:3001/api";

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  withCredentials: true,
});

export const getEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await api.post("/events", eventData);
    toast.success("Event created successfully");
    return response.data.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to create event";
    toast.error(errorMessage);
    console.error("Event creation error:", error.response?.data || error);
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const response = await api.put(`/events/${id}`, eventData);
    toast.success("Event updated successfully");
    return response.data.data;
  } catch (error) {
    toast.error("Failed to update event");
    throw error;
  }
};

export const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response.data;
};
