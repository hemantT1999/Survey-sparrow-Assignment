import Event from "../models/Event.js"; // Add this import at the top
import {
  createEvent as createEventService,
  getAllEvents,
  updateEvent,
  deleteEvent as deleteEventService, // Add this import
} from "../services/eventService.js";

class EventController {
  async getAllEvents(req, res) {
    try {
      const events = await getAllEvents();
      res.status(200).json({ success: true, data: events });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async createEvent(req, res) {
    try {
      const event = await createEventService(req.body);
      res.status(201).json({ success: true, data: event });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async updateEvent(req, res) {
    try {
      const event = await updateEvent(req.params.id, req.body);
      res.status(200).json({ success: true, data: event });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async deleteEvent(req, res) {
    try {
      const deletedEvent = await deleteEventService(req.params.id); // Use the service
      if (!deletedEvent) {
        return res.status(404).json({
          success: false,
          message: "Event not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Event deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getEvents(req, res) {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default EventController;
