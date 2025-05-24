import Event from "../models/Event.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// For __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔍 Fetch all events
export const getAllEvents = async () => {
  try {
    const events = await Event.find({});
    return events;
  } catch (error) {
    console.error("Error fetching events from database:", error);
    return [];
  }
};

// 🆕 Create a new event
export const createEvent = async (eventData) => {
  try {
    // Basic validation
    if (!eventData.title || !eventData.date) {
      throw new Error("Title and date are required");
    }

    // Ensure date is valid
    const date = new Date(eventData.date);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    // Remove any _id field if present to let MongoDB generate it
    delete eventData._id;

    const newEvent = new Event(eventData);
    await newEvent.save();
    return newEvent;
  } catch (error) {
    console.error("Error in createEvent service:", error);
    throw error;
  }
};

// 🔁 Update an existing event
export const updateEvent = async (id, eventData) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, eventData, {
      new: true,
    });
    if (!updatedEvent) {
      throw new Error("Event not found");
    }
    return updatedEvent;
  } catch (error) {
    console.error("Error in updateEvent service:", error);
    throw error;
  }
};

// ❌ Delete an event
export const deleteEvent = async (id) => {
  const deletedEvent = await Event.findByIdAndDelete(id);
  if (!deletedEvent) {
    throw new Error("Event not found");
  }
  return deletedEvent;
};
