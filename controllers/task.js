import task from "../models/task.js";

export const getAllTasks = async (req, res) => {
  res.status(200).json({ msg: "Show all tasks" });
};
export const getAllTasksTesting = async (req, res) => {
  res.status(200).json({ msg: "Show all tasks testing" });
};
const myData = await task.find({});
res.json(myData);