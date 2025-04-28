// const taskModel = require("../model/taskModel");

// exports.addTask = async (req, res) => {
//   const { title, category, description } = req.body;
//   console.log("adgadgvvwrbw")
//   console.log(">>>>>>>>> , ", req.body)

//   try {
//     const existingTask = await taskModel.findOne({ title, category });
//     if (existingTask) {
//       return res.status(400).json({ message: "Task already exists." });
//     }

//     const newTask = new taskModel({
//       title,
//       category,
//       description,
//       userId: req.user.id,
//     });

//     console.log("newTask : ", newTask)

//     const savedTask = await newTask.save();
//     res.status(201).json({ message: "Task added successfully", task: savedTask });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding task", error });
//   }
// };

// exports.getAll = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const role = req.user.role;
//     console.log(userId)


//     let data;

//     if (role === "admin") {
//       data = await taskModel.find().populate("userId", "name email role");
//     } else if (role === "user") {
//       data = await taskModel.find({ userId }).populate("userId", "name email");
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching tasks", error });
//   }
// };





// const taskModel = require("../model/taskModel");

// exports.addTask = async (req, res) => {
//   const { title, category, description } = req.body;

//   try {
//     const existingTask = await taskModel.findOne({ title, category, userId: req.user.id });
//     if (existingTask) {
//       return res.status(400).json({ message: "Task already exists." });
//     }

//     const newTask = new taskModel({
//       title,
//       category,
//       description,
//       userId: req.user.id,
//     });

//     const savedTask = await newTask.save();
//     res.status(201).json({ message: "Task added successfully", task: savedTask });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding task", error });
//   }
// };

// exports.getAll = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const role = req.user.role;

//     let data;

//     if (role === "admin") {
//       data = await taskModel.find().populate("userId", "name email role");
//     } else {
//       data = await taskModel.find({ userId }).populate("userId", "name email");
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching tasks", error });
//   }
// };




// const taskModel = require("../model/taskModel");

// // Add Task
// exports.addTask = async (req, res) => {
//   const { title, category, description } = req.body;

//   if (!title || !category || !description) {
//     return res.status(400).json({ message: "All fields (title, category, description) are required" });
//   }

//   try {
//     const existingTask = await taskModel.findOne({ title, category, userId: req.user.id });
//     if (existingTask) {
//       return res.status(400).json({ message: "Task with this title and category already exists." });
//     }

//     const newTask = new taskModel({
//       title,
//       category,
//       description,
//       userId: req.user.id,
//     });

//     const savedTask = await newTask.save();
//     res.status(201).json({ message: "Task added successfully", task: savedTask });
//   } catch (error) {
//     console.error("Error adding task:", error);
//     res.status(500).json({ message: "Error adding task", error: error.message });
//   }
// };



// exports.getAll = async (req, res) => {
//   try {
//     const data = await taskModel.find().populate("userId", "name email role");

//     if (!data || data.length === 0) {
//       return res.status(404).json({ message: "No tasks found" });
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     res.status(500).json({ message: "Error fetching tasks", error: error.message });
//   }
// };







// const taskModel = require("../model/taskModel");

// // Add Task (User-specific)
// exports.addTask = async (req, res) => {
//   const { title, category, description } = req.body;

//   // Check if all required fields are provided
//   if (!title || !category || !description) {
//     return res.status(400).json({ message: "All fields (title, category, description) are required" });
//   }

//   try {
//     // Check if task with the same title and category already exists for the user
//     const existingTask = await taskModel.findOne({ title, category, userId: req.user.id });
//     if (existingTask) {
//       return res.status(400).json({ message: "Task with this title and category already exists." });
//     }

//     // Create a new task
//     const newTask = new taskModel({
//       title,
//       category,
//       description,
//       userId: req.user.id, // Assign the task to the user
//     });

//     // Save the new task
//     const savedTask = await newTask.save();
//     res.status(201).json({ message: "Task added successfully", task: savedTask });
//   } catch (error) {
//     console.error("Error adding task:", error);
//     res.status(500).json({ message: "Error adding task", error: error.message });
//   }
// };

// // Get All Tasks (Admin and User-specific)
// exports.getAll = async (req, res) => {
//   try {
//     let tasks;
//     // Admin can see all tasks, regular users can see only their own tasks
//     if (req.user.role === 'admin') {
//       tasks = await taskModel.find().populate("userId", "name email role");
//     } else {
//       tasks = await taskModel.find({ userId: req.user.id }).populate("userId", "name email role");
//     }

//     if (!tasks || tasks.length === 0) {
//       return res.status(404).json({ message: "No tasks found" });
//     }

//     res.status(200).json(tasks);
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     res.status(500).json({ message: "Error fetching tasks", error: error.message });
//   }
// };

// // Delete Task (Admin or User-specific)
// exports.deleteTask = async (req, res) => {
//   const { taskId } = req.body;

//   // Check if task ID is provided
//   if (!taskId) {
//     return res.status(400).json({ message: "Task ID is required" });
//   }

//   try {
//     const task = await taskModel.findById(taskId);

//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     // If the user is not an admin, they can only delete their own tasks
//     if (req.user.role !== 'admin' && task.userId.toString() !== req.user.id) {
//       return res.status(403).json({ message: "You are not authorized to delete this task" });
//     }

//     // Remove the task from the database
//     await task.remove();
//     res.status(200).json({ message: "Task deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting task:", error);
//     res.status(500).json({ message: "Error deleting task", error: error.message });
//   }
// };

// // Update Task (Admin or User-specific)
// exports.updateTask = async (req, res) => {
//   const { taskId, title, category, description, status } = req.body;

//   // Validate that all required fields are provided
//   if (!taskId || !title || !category || !description) {
//     return res.status(400).json({ message: "Task ID, title, category, and description are required" });
//   }

//   // Validate status if provided
//   const validStatuses = ["Pending", "In Progress", "Completed"];
//   if (status && !validStatuses.includes(status)) {
//     return res.status(400).json({ message: "Invalid status value" });
//   }

//   try {
//     // Find the task to be updated
//     const task = await taskModel.findById(taskId);

//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     // If the user is not an admin, they can only update their own tasks
//     if (req.user.role !== 'admin' && task.userId.toString() !== req.user.id) {
//       return res.status(403).json({ message: "You are not authorized to update this task" });
//     }

//     // Update the task fields
//     task.title = title;
//     task.category = category;
//     task.description = description;
//     if (status) task.status = status; // Optionally update the status of the task

//     // Save the updated task
//     const updatedTask = await task.save();
//     res.status(200).json({ message: "Task updated successfully", task: updatedTask });
//   } catch (error) {
//     console.error("Error updating task:", error);
//     res.status(500).json({ message: "Error updating task", error: error.message });
//   }
// };





const taskModel = require("../model/taskModel");

// Add Task (User-specific)
exports.addTask = async (req, res) => {
  const { title, category, description } = req.body;

  // Check if all required fields are provided
  if (!title || !category || !description) {
    return res.status(400).json({ message: "All fields (title, category, description) are required" });
  }

  try {
    // Check if task with the same title and category already exists for the user
    const existingTask = await taskModel.findOne({ title, category, userId: req.user.id });
    if (existingTask) {
      return res.status(400).json({ message: "Task with this title and category already exists." });
    }

    // Create a new task
    const newTask = new taskModel({
      title,
      category,
      description,
      userId: req.user.id, // Assign the task to the user
    });

    // Save the new task
    const savedTask = await newTask.save();
    res.status(201).json({ message: "Task added successfully", task: savedTask });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Error adding task", error: error.message });
  }
};

// Get All Tasks (Admin and User-specific)
exports.getAll = async (req, res) => {
  try {
    let tasks;
    // Admin can see all tasks, regular users can see only their own tasks
    if (req.user.role === 'admin') {
      tasks = await taskModel.find().populate("userId", "name email role");
    } else {
      tasks = await taskModel.find({ userId: req.user.id }).populate("userId", "name email role");
    }

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Error fetching tasks", error: error.message });
  }
};

// In your taskController.js
exports.updateTask = async (req, res) => {
  const { title, category, description, status } = req.body;
  const { taskId } = req.params; // This extracts taskId from the URL

  // Validate that all required fields are provided
  if (!taskId || !title || !category || !description) {
    return res.status(400).json({ message: "Task ID, title, category, and description are required" });
  }

  // Validate status if provided
  const validStatuses = ["Pending", "In Progress", "Completed"];
  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    // Find the task to be updated
    const task = await taskModel.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // If the user is not an admin, they can only update their own tasks
    if (req.user.role !== 'admin' && task.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to update this task" });
    }

    // Update the task fields
    task.title = title;
    task.category = category;
    task.description = description;
    if (status) task.status = status; // Optionally update the status of the task

    // Save the updated task
    const updatedTask = await task.save();
    res.status(200).json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Error updating task", error: error.message });
  }
};

// Delete Task (Admin or User-specific)
exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;  // Get the taskId from the URL parameter

  // Check if task ID is provided
  if (!taskId) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  try {
    const task = await taskModel.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // If the user is not an admin, they can only delete their own tasks
    if (req.user.role !== 'admin' && task.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to delete this task" });
    }

    // Use deleteOne() to delete the task
    await taskModel.deleteOne({ _id: taskId });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Error deleting task", error: error.message });
  }
};