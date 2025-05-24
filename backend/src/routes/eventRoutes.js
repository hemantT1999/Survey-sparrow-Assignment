// filepath: /backend/src/routes/eventRoutes.js
import express from 'express';
import EventController from '../controllers/eventController.js';

const router = express.Router();
const eventController = new EventController();

// Route to get all events
router.get('/', eventController.getAllEvents);

// Route to create a new event
router.post('/', eventController.createEvent);

// Route to update an existing event
router.put('/:id', eventController.updateEvent);

// Route to delete an event
router.delete('/:id', eventController.deleteEvent);

export default router;