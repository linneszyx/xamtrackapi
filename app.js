import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/connect.js"; // Make sure this exports default
import tasks from "./routes/task.js";
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Linneszyx Home Page");
});

app.use("/api/tasks", tasks);
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
