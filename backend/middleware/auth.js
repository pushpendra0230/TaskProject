// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// require("dotenv").config();

// const secret = process.env.SECRET_KEY;

// module.exports = async (req, res, next) => {
//   try {
//     // Get token from Authorization header
//     const bearerToken = req.headers.authorization;

//     if (!bearerToken) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Extract token from Bearer string
//     const token = bearerToken.split(" ")[1]; // The format should be "Bearer <token>"

//     if (!token) {
//       return res.status(401).json({ message: "Token missing or malformed" });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, secret);

//     if (!decoded) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     // Find the user from DB using decoded email
//     const user = await userModel.findOne({ email: decoded.email });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     // Optionally check if user is active
//     if (user.status !== "active") {
//       return res.status(403).json({ message: "User is inactive" });
//     }

//     // Attach user data to the request object
//     req.user = {
//       id: user._id,
//       email: user.email,
//       role: user.role,
//     };

//     // Proceed to next middleware/controller
//     next();

//   } catch (error) {
//     console.error("Token error:", error.message);

//     // Handle specific JWT errors (e.g., expired token)
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ message: "Token has expired" });
//     }

//     // Handle other errors
//     res.status(401).json({ message: "Authentication failed", error: error.message });
//   }
// };








// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// require("dotenv").config();

// const secret = process.env.SECRET_KEY;

// module.exports = async (req, res, next) => {
//   try {
//     // Get token from Authorization header
//     const bearerToken = req.headers.authorization;

//     if (!bearerToken) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Extract token from Bearer string
//     const token = bearerToken.split(" ")[1]; // The format should be "Bearer <token>"

//     if (!token) {
//       return res.status(401).json({ message: "Token missing or malformed" });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, secret);

//     if (!decoded) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     // Find the user from DB using decoded email
//     const user = await userModel.findOne({ email: decoded.email });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     // Optionally check if the user is active
//     if (user.status !== "active") {
//       return res.status(403).json({ message: "User is inactive" });
//     }

//     // Attach user data to the request object
//     req.user = {
//       id: user._id,
//       email: user.email,
//       role: user.role,  // Add user role here for later use
//     };

//     // Authorization check for admin routes (if the route requires admin privileges)
//     if (req.originalUrl.includes("/getAdmin") && req.user.role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     // Proceed to next middleware/controller
//     next();

//   } catch (error) {
//     console.error("Token error:", error.message);

//     // Handle specific JWT errors (e.g., expired token)
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ message: "Token has expired" });
//     }

//     // Handle other errors
//     res.status(401).json({ message: "Authentication failed", error: error.message });
//   }
// };






// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// require("dotenv").config();

// const secret = process.env.SECRET_KEY;

// module.exports = async (req, res, next) => {
//   try {
//     // Get token from Authorization header
//     const bearerToken = req.headers.authorization;

//     if (!bearerToken) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Extract token from Bearer string
//     const token = bearerToken.split(" ")[1]; // The format should be "Bearer <token>"

//     if (!token) {
//       return res.status(401).json({ message: "Token missing or malformed" });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, secret);

//     if (!decoded) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     // Find the user from DB using decoded email
//     const user = await userModel.findOne({ email: decoded.email });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     // Optionally check if the user is active
//     if (user.status !== "active") {
//       return res.status(403).json({ message: "User is inactive" });
//     }

//     // Attach user data to the request object
//     req.user = {
//       id: user._id,
//       email: user.email,
//       role: user.role,  // Add user role here for later use
//     };

//     // Authorization check for admin routes (if the route requires admin privileges)
//     // If the route is deleteAdmin, check if the user is an admin
//     if (req.originalUrl.includes("/deleteAdmin") && req.user.role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     // Proceed to next middleware/controller
//     next();

//   } catch (error) {
//     console.error("Token error:", error.message);

//     // Handle specific JWT errors (e.g., expired token)
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ message: "Token has expired" });
//     }

//     // Handle other errors
//     res.status(401).json({ message: "Authentication failed", error: error.message });
//   }
// };













const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

module.exports = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Extract token from Bearer string
    const token = bearerToken.split(" ")[1]; // The format should be "Bearer <token>"

    if (!token) {
      return res.status(401).json({ message: "Token missing or malformed" });
    }

    // Verify the token
    const decoded = jwt.verify(token, secret);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Find the user from DB using decoded email
    const user = await userModel.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Optionally check if the user is active
    if (user.status !== "active") {
      return res.status(403).json({ message: "User is inactive" });
    }

    // Attach user data to the request object
    req.user = {
      id: user._id,
      email: user.email,
      role: user.role,  // Add user role here for later use
    };

    // Role-based access control for editing users
    if (req.originalUrl.includes("/edit") && req.user.role !== "admin" && req.user.id !== req.params.id) {
      return res.status(403).json({ message: "You can only edit your own details or you must be an admin" });
    }

    // Authorization check for admin routes (e.g., deleteAdmin)
    if (req.originalUrl.includes("/deleteAdmin") && req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Proceed to next middleware/controller
    next();

  } catch (error) {
    console.error("Token error:", error.message);

    // Handle specific JWT errors (e.g., expired token)
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }

    // Handle other errors
    res.status(401).json({ message: "Authentication failed", error: error.message });
  }
};
















// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// require("dotenv").config();

// const secret = process.env.SECRET_KEY;

// module.exports = async (req, res, next) => {
//   try {
//     // Get token from Authorization header
//     const bearerToken = req.headers.authorization;

//     if (!bearerToken) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Extract token from Bearer string
//     const token = bearerToken.split(" ")[1]; // The format should be "Bearer <token>"

//     if (!token) {
//       return res.status(401).json({ message: "Token missing or malformed" });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, secret);

//     if (!decoded) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     // Find the user from DB using decoded email
//     const user = await userModel.findOne({ email: decoded.email });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     // Optionally check if the user is active
//     if (user.status !== "active") {
//       return res.status(403).json({ message: "User is inactive" });
//     }

//     // Check if the user is verified (based on OTP verification)
//     if (!user.isVerified) {
//       return res.status(403).json({ message: "User is not verified. Please verify your account." });
//     }

//     // Optionally, check if OTP has expired
//     if (user.otp && user.isOtpExpired()) {
//       return res.status(403).json({ message: "OTP expired. Please request a new OTP." });
//     }

//     // Attach user data to the request object
//     req.user = {
//       id: user._id,
//       email: user.email,
//       role: user.role,  // Add user role here for later use
//     };

//     // Authorization check for admin routes (if the route requires admin privileges)
//     if (req.originalUrl.includes("/getAdmin") && req.user.role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     // Proceed to next middleware/controller
//     next();

//   } catch (error) {
//     console.error("Token error:", error.message);

//     // Handle specific JWT errors (e.g., expired token)
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ message: "Token has expired" });
//     }

//     // Handle other errors
//     res.status(401).json({ message: "Authentication failed", error: error.message });
//   }
// };