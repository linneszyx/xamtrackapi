import express from "express";
import { getAllTasks, getAllTasksTesting } from "../controllers/task.js";

const router = express.Router();

router.route("/").get(getAllTasks);

router.route("/testing").get(getAllTasksTesting);
export default router;