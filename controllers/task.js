import task from "../models/task.js";
export const getAllTasks = async (req, res) => {
  try {
    const { priority, status, description, sort,select } = req.query;
    const queryObject = {};
    
    if (priority) {
      queryObject.priority = { $regex: priority, $options: "i" };
    }
    if (status) {
      queryObject.status = { $regex: status, $options: "i" };
    }
    if (description) {
      queryObject.description = { $regex: description, $options: "i" };
    }
    let apiData = task.find(queryObject);
    if (sort) {
      let sortProblem = sort.replace(",", " ");
      apiData = apiData.sort(sortProblem);
    }
    if(select) {
      let selectProblem = select.split(",").join(" ");
     apiData = apiData.select(selectProblem);
    }
    let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);
    const myData = await apiData;
    res.status(200).json({ myData ,nbHits:myData.length});
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
export const getAllTasksTesting = async (req, res) => {
  try {
    const myData = await Task.find(req.query).skip(2);
    res.status(200).json({ myData });
  } catch (error) {
    res.status(200).json({ msg: "Show all tasks testing" });
  }
};
