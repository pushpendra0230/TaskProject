// const express = require("express");
// const router = express.Router();
// const taskController = require("../controller/taskController");
// const auth = require("../middleware/auth");

// router.post("/add-task", auth, taskController.addTask);

// router.get("/get-all", auth, taskController.getAll);

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const taskController = require("../controller/taskController");
// const auth = require("../middleware/auth");

// // POST route for adding a task
// router.post("/add-task", auth, taskController.addTask);

// // GET route for fetching all tasks
// router.get("/get-all", auth, taskController.getAll);

// // DELETE route for deleting a task
// router.delete("/delete", auth, taskController.deleteTask);

// // PUT route for updating a task
// router.put("/update", auth, taskController.updateTask);

// module.exports = router;






const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
const auth = require("../middleware/auth");

// POST route for adding a task
router.post("/add-task", auth, taskController.addTask);

// GET route for fetching all tasks
router.get("/get-all", auth, taskController.getAll);

// PUT route for updating a task
router.put("/update/:taskId", auth, taskController.updateTask);

// DELETE route for deleting a task
router.delete("/delete/:taskId", auth, taskController.deleteTask);

module.exports = router;