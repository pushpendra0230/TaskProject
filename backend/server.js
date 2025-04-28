// // server.js
// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const dbConnection = require("./db/dataBase");
// const taskRoutes = require("./routes/taskRoutes");
// const userRoutes = require("./routes/userRoutes");
// // const fileUpload = require(`express-fileupload`)

// const app = express();
// const port = process.env.PORT || 6001;

// // Middlewares
// app.use(cors());
// app.use(express.json());
// // app.use(fileUpload());
// // app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/user", userRoutes);
// app.use("/tasks", taskRoutes);

// dbConnection();

// app.listen(port, () => {
//   console.log(`🚀 Server is running on http://localhost:${port}`);
// });



const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./db/dataBase");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const auth = require("./middleware/auth"); // Make sure you have auth middleware in place

const app = express();
const port = process.env.PORT || 6001;

// Middlewares
app.use(cors());  // Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // Parse incoming JSON requests
// app.use(fileUpload());  // If you want to handle file uploads
// app.use(express.urlencoded({ extended: true }));  // For handling form submissions if needed

// Admin Middleware to check if the user is admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.status(403).json({ message: "Access denied, admin only" });
  }
};

// Routes
// User Routes - accessible to all users
app.use("/user", userRoutes);

// Task Routes - secured routes
app.use("/tasks", auth, taskRoutes);

// Admin Routes - only accessible to admin users
// For example, adding a new admin can only be done by an existing admin
app.use("/admin", auth, isAdmin, userRoutes); // For admin-specific actions

// Health check route to ensure server is up and running
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

// Database connection
dbConnection();  // Make sure your db connection is correctly set up

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});



// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const dbConnection = require("./db/dataBase");
// const taskRoutes = require("./routes/taskRoutes");
// const userRoutes = require("./routes/userRoutes");
// const adminRoutes = require("./routes/adminRoutes");

// const app = express();
// const port = process.env.PORT || 6001;

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/user", userRoutes);
// app.use("/tasks", taskRoutes);
// app.use("/admin", adminRoutes);

// dbConnection();

// app.listen(port, () => {
//   console.log(`🚀 Server is running on http://localhost:${port}`);
// });