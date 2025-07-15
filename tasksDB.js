import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Task from "./models/task.js";
import fs from "fs/promises";

const data = await fs.readFile("./tasks.json", "utf-8");
const tasksJSON = JSON.parse(data);

const start = async () => {
  try {
      await connectDB(process.env.MONGODB_URL);
      await Task.create(tasksJSON);
     // await Task.deleteMany();
    console.log("Tasks created successfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
