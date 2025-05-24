import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: String,
  description: String,
  type: {
    type: String,
    enum: ["reminder", "birthday", "interview", "festival", "trip"],
    default: "reminder",
  },
  color: { type: String, default: "#3B82F6" },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
