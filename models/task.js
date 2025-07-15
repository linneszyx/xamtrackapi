import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
const taskSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Please provide an id for the task."],
      trim: true,
      unique: true,
      default:uuidv4
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["completed", "incomplete"],
      default: "incomplete",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
      message: "{VALUE} is not supported",
    },

    dueDate: {
      type: Date,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
