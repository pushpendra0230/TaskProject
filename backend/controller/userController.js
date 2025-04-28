// // exports.login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const existingEmail = await userModel.findOne({ email });
// //     if (!existingEmail) {
// //       return res.status(400).json({ message: "Email does not exist" });
// //     }

// //     const isMatch = bcrypt.compareSync(password, existingEmail.password);
// //     if (!isMatch) {
// //       return res.status(404).json({ message: "Incorrect password" });
// //     }

// //     const token = jwt.sign(
// //       {
// //         email: existingEmail.email,
// //         id: existingEmail._id,
// //         role: existingEmail.role,
// //       },
// //       secretKey,
// //       { expiresIn: "1d" }
// //     );

// //     res.status(200).json({ message: "Login successful", token });
// //   } catch (error) {
// //     res.status(500).json({ message: "Login failed", error });
// //   }
// // };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {

//     const existingEmail = await userModel.findOne({ email });
//     if (!existingEmail) {
//       return res.status(400).json({ message: "Email does not exist" });
//     }


//     const isMatch = bcrypt.compareSync(password, existingEmail.password);
//     if (!isMatch) {
//       return res.status(404).json({ message: "Incorrect password" });
//     }

//     const token = jwt.sign(
//       {
//         email: existingEmail.email,
//         id: existingEmail._id,
//         role: existingEmail.role,
//       },
//       "xyhn ujvz lknw eapm",
//       { expiresIn: "1d" }
//     );

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "sonipushpendra256@gmail.com",
//         pass: "xyhn ujvz lknw eapm",
//       },
//     });

//     const mailOptions = {
//       from: "sonipushpendra256@gmail.com",
//       to: "cartoonkaai1@gmail.com",
//       // from: "ps5207977@gmail.com",
//       // to: email,
//       subject: "Login Notification",
//       text: `Hi ${existingEmail.name},\n\nYou have successfully logged into your account.\n\nIf this wasn't you, please secure your account.\n\nBest,\nYour App Team`,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.error("Error sending email:", err);
//         return res.status(500).json({ message: "Error sending email", error: err });
//       } else {
//         console.log("Email sent: " + info.response);
//         return res.status(200).json({ message: "Login successful", token });
//       }
//     });

//   } catch (error) {
//     console.error("Login failed:", error);
//     return res.status(500).json({ message: "Login failed", error });
//   }
// };


// exports.delete = async (req, res) => {
//   res.status(200).json({ message: "User delete route (yet to implement)" });
// };

// // GET all users
// exports.getAllUsers = async (req, res) => {

//   const users = await userModel.find()
//   res.status(200).json(users);

// };






// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// const nodemailer = require("nodemailer");
// const moment = require("moment");
// require("dotenv").config();

// // Send OTP via email
// const sendOtpEmail = async (toEmail, otp, name) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: toEmail,
//       subject: "Verify Your Email with OTP",
//       text: `Hello ${name},\n\nYour OTP for email verification is: ${otp}\n\nThis OTP is valid for 10 minutes.`,
//     };

//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (err) {
//     console.error("Error sending OTP email:", err);
//     return false;
//   }
// };

// // Sign up user and send OTP
// exports.createUsers = async (req, res) => {
//   const { name, email, phone, password, role } = req.body;

//   try {
//     const existingEmail = await userModel.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);

//     const otp = Math.floor(Math.random() * 900000 + 100000);
//     const otpTimer = moment().add(10, "minutes");

//     const newUser = new userModel({
//       name,
//       email,
//       phone,
//       password: hash,
//       role,
//       otp,
//       otpTimer,
//     });

//     await newUser.save();

//     const otpSent = await sendOtpEmail(email, otp, name);
//     if (!otpSent) {
//       return res.status(500).json({ message: "Error sending OTP email" });
//     }

//     res.status(201).json({
//       message: "User created successfully. OTP sent to email.",
//       otp,
//       user: newUser,
//     });
//   } catch (error) {
//     console.error("Error in createUsers:", error);
//     res.status(500).json({ message: "Error creating user", error: error.message || error });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingEmail = await userModel.findOne({ email });
//     if (!existingEmail) {
//       return res.status(400).json({ message: "Email does not exist" });
//     }

//     const isMatch = bcrypt.compareSync(password, existingEmail.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }

//     const token = jwt.sign(
//       {
//         email: existingEmail.email,
//         id: existingEmail._id,
//         role: existingEmail.role,
//       },
//       process.env.SECRET_KEY,
//       { expiresIn: "1d" }
//     );

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Login Notification",
//       text: `Hi ${existingEmail.name},\n\nYou have successfully logged into your account.\n\nIf this wasn't you, please secure your account.\n\nBest,\nYour App Team`,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.error("Error sending email:", err);
//         return res.status(500).json({ message: "Login successful, but failed to send email", token });
//       } else {
//         console.log("Email sent: " + info.response);
//         return res.status(200).json({ message: "Login successful", token });
//       }
//     });
//   } catch (error) {
//     console.error("Login failed:", error);
//     return res.status(500).json({ message: "Login failed", error });
//   }
// };

// // exports.delete = async (req, res) => {
// //   res.status(200).json({ message: "User delete route (yet to implement)" });
// // };

// exports.delete = async (req, res) => {
//   try {
//     const { id } = req.params; // Extract user ID from the URL parameter
//     const deletedUser = await userModel.findByIdAndDelete(id); // Delete the user from the database

//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" }); // If the user doesn't exist, return a 404 error
//     }

//     res.status(200).json({ message: "User deleted successfully" }); // Send success response
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({ message: "Error deleting user", error }); // Handle any errors
//   }
// };


// // Get all users
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await userModel.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch users", error });
//   }
// };







// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// const nodemailer = require("nodemailer");
// const moment = require("moment");
// require("dotenv").config();

// // Utility: Send OTP email with a more polished template
// const sendOtpEmail = async (toEmail, otp, name) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: toEmail,
//       subject: "Verify Your Email - OTP Verification",
//       html: `
//         <html>
//           <body>
//             <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
//               <div style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
//                 <h2 style="color: #4CAF50;">Hello ${name},</h2>
//                 <p style="font-size: 16px;">Welcome to Our Platform! To complete your registration, please verify your email address.</p>
//                 <h3 style="color: #333;">Your OTP is: <strong style="font-size: 24px; color: #ff5722;">${otp}</strong></h3>
//                 <p style="font-size: 16px;">This OTP is valid for <strong>10 minutes</strong>. If you didn't request this, please ignore this email.</p>
//                 <br />
//                 <footer style="font-size: 14px; color: #888;">
//                   <p>Regards, <br />Your App Team</p>
//                 </footer>
//               </div>
//             </div>
//           </body>
//         </html>`,
//     };

//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (err) {
//     console.error("Error sending OTP email:", err);
//     return false;
//   }
// };

// // POST /signup
// exports.createUsers = async (req, res) => {
//   const { name, email, phone, password, role } = req.body;

//   try {
//     const existingEmail = await userModel.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     const otp = Math.floor(Math.random() * 900000 + 100000); // Generate OTP
//     const otpTimer = moment().add(10, "minutes"); // OTP expiration time

//     const newUser = new userModel({
//       name,
//       email,
//       phone,
//       password: hashedPassword,
//       role,
//       otp,
//       otpTimer,
//     });

//     await newUser.save();

//     const otpSent = await sendOtpEmail(email, otp, name);
//     if (!otpSent) {
//       return res.status(500).json({ message: "Error sending OTP email" });
//     }

//     res.status(201).json({
//       message: "User registered successfully. OTP sent to email.",
//       otp,
//       user: {
//         name: newUser.name,
//         email: newUser.email,
//         phone: newUser.phone,
//         role: newUser.role,
//         status: newUser.status,
//         _id: newUser._id,
//       },
//     });
//   } catch (error) {
//     console.error("Error in createUsers:", error);
//     res.status(500).json({ message: "Error creating user", error: error.message });
//   }
// };

// // POST /login
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Email does not exist" });
//     }

//     const isMatch = bcrypt.compareSync(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       process.env.SECRET_KEY,
//       { expiresIn: "1d" }
//     );

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Login Notification",
//       html: `
//         <html>
//           <body>
//             <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
//               <div style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
//                 <h2 style="color: #4CAF50;">Hi ${user.name},</h2>
//                 <p style="font-size: 16px;">You have successfully logged into your account.</p>
//                 <p style="font-size: 16px; color: #ff5722;"><strong>If this wasn't you, please secure your account immediately.</strong></p>
//                 <footer style="font-size: 14px; color: #888;">
//                   <p>Regards, <br />Your App Team</p>
//                 </footer>
//               </div>
//             </div>
//           </body>
//         </html>`,
//     };

//     transporter.sendMail(mailOptions, (err) => {
//       if (err) {
//         console.error("Login email error:", err);
//         return res.status(200).json({ message: "Login successful, but email not sent", token });
//       }

//       return res.status(200).json({ message: "Login successful", token });
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Login failed", error });
//   }
// };

// // GET /getAll
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await userModel.find({}, "-password -otp -otpTimer"); // Hide sensitive info
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch users", error });
//   }
// };

// // DELETE /delete/:id
// exports.delete = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await userModel.findByIdAndDelete(id);

//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// };

// // GET /getAdmin - Admins only
// exports.getAdmins = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const admins = await userModel.find({ role: "admin" }, "-password -otp -otpTimer");
//     res.status(200).json(admins);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch admins", error });
//   }
// };

// // PATCH /active - Admins can mark other admins as active
// exports.markAdminActive = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const { taskId } = req.body;
//     const updatedAdmin = await userModel.findByIdAndUpdate(
//       taskId,
//       { status: "active" },
//       { new: true }
//     );

//     if (!updatedAdmin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     res.status(200).json({ message: "Admin marked as active", updatedAdmin });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to mark admin as active", error });
//   }
// };

// // DELETE /deleteAdmin - Admins can delete other admins
// exports.deleteAdmin = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const { taskId } = req.body;
//     const deletedAdmin = await userModel.findByIdAndDelete(taskId);

//     if (!deletedAdmin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     res.status(200).json({ message: "Admin deleted successfully" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ message: "Error deleting admin", error });
//   }
// };

// // Middleware for checking if user is an admin
// exports.isAdmin = (req, res, next) => {
//   const { role } = req.user;
//   if (role !== "admin") {
//     return res.status(403).json({ message: "Access denied. Admins only." });
//   }
//   next();
// };








// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// const nodemailer = require("nodemailer");
// const moment = require("moment");
// require("dotenv").config();
// const crypto = require("crypto");

// // Utility: Send OTP email with a polished template
// const sendOtpEmail = async (toEmail, otp, name) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: toEmail,
//       subject: "Verify Your Email - OTP Verification",
//       html: `
//         <html>
//           <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f2f2f2;">
//             <div style="padding: 30px; background-color: #f2f2f2;">
//               <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
//                   <h1>Welcome to Our Platform, ${name}!</h1>
//                 </div>
//                 <div style="padding: 20px;">
//                   <p style="font-size: 16px; color: #333333;">To complete your registration, please verify your email address by entering the following OTP (One-Time Password):</p>
//                   <h2 style="font-size: 24px; color: #FF5722; font-weight: bold;">${otp}</h2>
//                   <p style="font-size: 16px; color: #333333;">This OTP is valid for the next <strong>10 minutes</strong>. If you didn't request this, please ignore this email.</p>
//                   <p style="font-size: 16px; color: #333333;">Regards,</p>
//                   <p style="font-size: 16px; color: #333333;">The Team</p>
//                 </div>
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 15px; border-radius: 0 0 8px 8px;">
//                   <p style="font-size: 14px;">This is an automated message. Please do not reply to this email.</p>
//                 </div>
//               </div>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (err) {
//     console.error("Error sending OTP email:", err);
//     return false;
//   }
// };

// // POST /signup
// exports.createUsers = async (req, res) => {
//   const { name, email, phone, password, role } = req.body;

//   try {
//     const existingEmail = await userModel.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     const otp = Math.floor(Math.random() * 900000 + 100000); // Generate OTP
//     const otpTimer = moment().add(10, "minutes"); // OTP expiration time

//     const newUser = new userModel({
//       name,
//       email,
//       phone,
//       password: hashedPassword,
//       role,
//       otp,
//       otpTimer,
//     });

//     await newUser.save();

//     const otpSent = await sendOtpEmail(email, otp, name);
//     if (!otpSent) {
//       return res.status(500).json({ message: "Error sending OTP email" });
//     }

//     res.status(201).json({
//       message: "User registered successfully. OTP sent to email.",
//       otp,
//       user: {
//         name: newUser.name,
//         email: newUser.email,
//         phone: newUser.phone,
//         role: newUser.role,
//         status: newUser.status,
//         _id: newUser._id,
//       },
//     });
//   } catch (error) {
//     console.error("Error in createUsers:", error);
//     res.status(500).json({ message: "Error creating user", error: error.message });
//   }
// };

// // POST /login
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Email does not exist" });
//     }

//     const isMatch = bcrypt.compareSync(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       process.env.SECRET_KEY,
//       { expiresIn: "1d" }
//     );

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Login Notification",
//       html: `
//         <html>
//           <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f2f2f2;">
//             <div style="padding: 30px; background-color: #f2f2f2;">
//               <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
//                   <h1>Hi ${user.name},</h1>
//                 </div>
//                 <div style="padding: 20px;">
//                   <p style="font-size: 16px; color: #333333;">You have successfully logged into your account.</p>
//                   <p style="font-size: 16px; color: #FF5722;"><strong>If this wasn't you, please secure your account immediately.</strong></p>
//                   <p style="font-size: 16px; color: #333333;">Regards,</p>
//                   <p style="font-size: 16px; color: #333333;">The Team</p>
//                 </div>
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 15px; border-radius: 0 0 8px 8px;">
//                   <p style="font-size: 14px;">This is an automated message. Please do not reply to this email.</p>
//                 </div>
//               </div>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     transporter.sendMail(mailOptions, (err) => {
//       if (err) {
//         console.error("Login email error:", err);
//         return res.status(200).json({ message: "Login successful, but email not sent", token });
//       }

//       return res.status(200).json({ message: "Login successful", token });
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Login failed", error });
//   }
// };



// // POST /verifyOtp
// exports.verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Check if OTP is valid and hasn't expired
//     if (user.otp !== otp) {
//       return res.status(400).json({ message: "Invalid OTP" });
//     }

//     if (moment().isAfter(user.otpTimer)) {
//       return res.status(400).json({ message: "OTP has expired" });
//     }

//     // OTP is valid, allow login
//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       process.env.SECRET_KEY,
//       { expiresIn: "1d" }
//     );

//     res.status(200).json({ message: "OTP verified successfully", token });
//   } catch (error) {
//     console.error("OTP verification error:", error);
//     res.status(500).json({ message: "Error verifying OTP", error });
//   }
// };


// // GET /getAll
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await userModel.find({}, "-password -otp -otpTimer");
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch users", error });
//   }
// };

// // DELETE /delete/:id
// exports.delete = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await userModel.findByIdAndDelete(id);

//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// };

// // GET /getAdmin - Admins only
// exports.getAdmins = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const admins = await userModel.find({ role: "admin" }, "-password -otp -otpTimer");
//     res.status(200).json(admins);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch admins", error });
//   }
// };

// // PATCH /active - Admins can mark other admins as active
// exports.markAdminActive = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const { taskId } = req.body;
//     const updatedAdmin = await userModel.findByIdAndUpdate(
//       taskId,
//       { status: "active" },
//       { new: true }
//     );

//     if (!updatedAdmin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     res.status(200).json({ message: "Admin marked as active", updatedAdmin });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to mark admin as active", error });
//   }
// };

// // DELETE /deleteAdmin - Admins can delete other admins
// exports.deleteAdmin = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const { taskId } = req.body;
//     const deletedAdmin = await userModel.findByIdAndDelete(taskId);

//     if (!deletedAdmin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     res.status(200).json({ message: "Admin deleted successfully" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ message: "Error deleting admin", error });
//   }
// };

// // Middleware for checking if user is an admin
// exports.isAdmin = (req, res, next) => {
//   const { role } = req.user;
//   if (role !== "admin") {
//     return res.status(403).json({ message: "Access denied. Admins only." });
//   }
//   next();
// };

















const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const nodemailer = require("nodemailer");
const moment = require("moment");
require("dotenv").config();
const crypto = require("crypto");

// Utility: Send OTP email with a polished template
const sendOtpEmail = async (toEmail, otp, name) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: toEmail,
      subject: "Verify Your Email - OTP Verification",
      html: `
        <html>
          <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f2f2f2;">
            <div style="padding: 30px; background-color: #f2f2f2;">
              <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <div style="text-align: center; background-color: #4CAF50; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                  <h1>Welcome to Our Platform, ${name}!</h1>
                </div>
                <div style="padding: 20px;">
                  <p style="font-size: 16px; color: #333333;">To complete your registration, please verify your email address by entering the following OTP (One-Time Password):</p>
                  <h2 style="font-size: 24px; color: #FF5722; font-weight: bold;">${otp}</h2>
                  <p style="font-size: 16px; color: #333333;">This OTP is valid for the next <strong>10 minutes</strong>. If you didn't request this, please ignore this email.</p>
                  <p style="font-size: 16px; color: #333333;">Regards,</p>
                  <p style="font-size: 16px; color: #333333;">The Team</p>
                </div>
                <div style="text-align: center; background-color: #4CAF50; color: white; padding: 15px; border-radius: 0 0 8px 8px;">
                  <p style="font-size: 14px;">This is an automated message. Please do not reply to this email.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.error("Error sending OTP email:", err);
    return false;
  }
};

// POST /signup
exports.createUsers = async (req, res) => {
  const { name, email, phone, password, role } = req.body;

  try {
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const otp = Math.floor(Math.random() * 900000 + 100000); // Generate OTP
    const otpTimer = moment().add(10, "minutes"); // OTP expiration time

    const newUser = new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
      otp,
      otpTimer,
    });

    await newUser.save();

    const otpSent = await sendOtpEmail(email, otp, name);
    if (!otpSent) {
      return res.status(500).json({ message: "Error sending OTP email" });
    }

    res.status(201).json({
      message: "User registered successfully. OTP sent to email.",
      otp,
      user: {
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        status: newUser.status,
        _id: newUser._id,
      },
    });
  } catch (error) {
    console.error("Error in createUsers:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// POST /login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email does not exist" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Login Notification",
      html: `
        <html>
          <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f2f2f2;">
            <div style="padding: 30px; background-color: #f2f2f2;">
              <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <div style="text-align: center; background-color: #4CAF50; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                  <h1>Hi ${user.name},</h1>
                </div>
                <div style="padding: 20px;">
                  <p style="font-size: 16px; color: #333333;">You have successfully logged into your account.</p>
                  <p style="font-size: 16px; color: #FF5722;"><strong>If this wasn't you, please secure your account immediately.</strong></p>
                  <p style="font-size: 16px; color: #333333;">Regards,</p>
                  <p style="font-size: 16px; color: #333333;">The Team</p>
                </div>
                <div style="text-align: center; background-color: #4CAF50; color: white; padding: 15px; border-radius: 0 0 8px 8px;">
                  <p style="font-size: 14px;">This is an automated message. Please do not reply to this email.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error("Login email error:", err);
        return res.status(200).json({ message: "Login successful, but email not sent", token });
      }

      return res.status(200).json({ message: "Login successful", token });
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed", error });
  }
};



// POST /verifyOtp
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if OTP is valid and hasn't expired
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (moment().isAfter(user.otpTimer)) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // OTP is valid, allow login
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "OTP verified successfully", token });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ message: "Error verifying OTP", error });
  }
};


// GET /getAll
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, "-password -otp -otpTimer");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

// DELETE /delete/:id
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Error deleting user", error });
  }
};

// GET /getAdmin - Admins only
exports.getAdmins = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const admins = await userModel.find({ role: "admin" }, "-password -otp -otpTimer");
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch admins", error });
  }
};

// PATCH /active - Admins can mark other admins as active
exports.markAdminActive = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const { taskId } = req.body;
    const updatedAdmin = await userModel.findByIdAndUpdate(
      taskId,
      { status: "active" },
      { new: true }
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin marked as active", updatedAdmin });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark admin as active", error });
  }
};

// DELETE /deleteAdmin - Admins can delete other admins
exports.deleteAdmin = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const { taskId } = req.body;
    const deletedAdmin = await userModel.findByIdAndDelete(taskId);

    if (!deletedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Error deleting admin", error });
  }
};

// Middleware for checking if user is an admin
exports.isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};



exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, role, password } = req.body;

    // Validate email format (basic)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Optional: Validate phone number format
    const phoneRegex = /^[0-9]{10}$/;
    if (phone && !phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number format" });
    }

    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;
    if (role) updateData.role = role;
    if (password) {
      const salt = bcrypt.genSaltSync(10);
      updateData.password = bcrypt.hashSync(password, salt);
    }

    const updatedUser = await userModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Edit user error:", error);
    res.status(500).json({ message: "Error updating user", error });
  }
};






// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");
// const nodemailer = require("nodemailer");
// const moment = require("moment");
// require("dotenv").config();

// // Utility: Send OTP email with a polished template
// const sendOtpEmail = async (toEmail, otp, name) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: toEmail,
//       subject: "Verify Your Email - OTP Verification",
//       html: `
//         <html>
//           <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f2f2f2;">
//             <div style="padding: 30px; background-color: #f2f2f2;">
//               <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
//                   <h1>Welcome to Our Platform, ${name}!</h1>
//                 </div>
//                 <div style="padding: 20px;">
//                   <p style="font-size: 16px; color: #333333;">To complete your registration, please verify your email address by entering the following OTP (One-Time Password):</p>
//                   <h2 style="font-size: 24px; color: #FF5722; font-weight: bold;">${otp}</h2>
//                   <p style="font-size: 16px; color: #333333;">This OTP is valid for the next <strong>10 minutes</strong>. If you didn't request this, please ignore this email.</p>
//                   <p style="font-size: 16px; color: #333333;">Regards,</p>
//                   <p style="font-size: 16px; color: #333333;">The Team</p>
//                 </div>
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 15px; border-radius: 0 0 8px 8px;">
//                   <p style="font-size: 14px;">This is an automated message. Please do not reply to this email.</p>
//                 </div>
//               </div>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (err) {
//     console.error("Error sending OTP email:", err);
//     return false;
//   }
// };

// // POST /signup
// exports.createUsers = async (req, res) => {
//   const { name, email, phone, password, role } = req.body;

//   try {
//     const existingEmail = await userModel.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     const otp = Math.floor(Math.random() * 900000 + 100000); // Generate OTP
//     const otpTimer = moment().add(10, "minutes"); // OTP expiration time

//     const newUser = new userModel({
//       name,
//       email,
//       phone,
//       password: hashedPassword,
//       role,
//       otp,
//       otpTimer,
//     });

//     await newUser.save();

//     const otpSent = await sendOtpEmail(email, otp, name);
//     if (!otpSent) {
//       return res.status(500).json({ message: "Error sending OTP email" });
//     }

//     res.status(201).json({
//       message: "User registered successfully. OTP sent to email.",
//       otp,
//       user: {
//         name: newUser.name,
//         email: newUser.email,
//         phone: newUser.phone,
//         role: newUser.role,
//         status: newUser.status,
//         _id: newUser._id,
//       },
//     });
//   } catch (error) {
//     console.error("Error in createUsers:", error);
//     res.status(500).json({ message: "Error creating user", error: error.message });
//   }
// };

// // POST /login
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Email does not exist" });
//     }

//     const isMatch = bcrypt.compareSync(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       process.env.SECRET_KEY,
//       { expiresIn: "1d" }
//     );

//     // Send login notification email
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Login Notification",
//       html: `
//         <html>
//           <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f2f2f2;">
//             <div style="padding: 30px; background-color: #f2f2f2;">
//               <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
//                   <h1>Hi ${user.name},</h1>
//                 </div>
//                 <div style="padding: 20px;">
//                   <p style="font-size: 16px; color: #333333;">You have successfully logged into your account.</p>
//                   <p style="font-size: 16px; color: #FF5722;"><strong>If this wasn't you, please secure your account immediately.</strong></p>
//                   <p style="font-size: 16px; color: #333333;">Regards,</p>
//                   <p style="font-size: 16px; color: #333333;">The Team</p>
//                 </div>
//                 <div style="text-align: center; background-color: #4CAF50; color: white; padding: 15px; border-radius: 0 0 8px 8px;">
//                   <p style="font-size: 14px;">This is an automated message. Please do not reply to this email.</p>
//                 </div>
//               </div>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     transporter.sendMail(mailOptions, (err) => {
//       if (err) {
//         console.error("Login email error:", err);
//         return res.status(200).json({ message: "Login successful, but email not sent", token });
//       }

//       return res.status(200).json({ message: "Login successful", token });
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Login failed", error });
//   }
// };

// // POST /verifyOtp
// exports.verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Check if OTP is valid and hasn't expired
//     if (user.otp !== otp) {
//       return res.status(400).json({ message: "Invalid OTP" });
//     }

//     if (moment().isAfter(user.otpTimer)) {
//       return res.status(400).json({ message: "OTP has expired" });
//     }

//     // OTP is valid, allow login
//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       process.env.SECRET_KEY,
//       { expiresIn: "1d" }
//     );

//     res.status(200).json({ message: "OTP verified successfully", token });
//   } catch (error) {
//     console.error("OTP verification error:", error);
//     res.status(500).json({ message: "Error verifying OTP", error });
//   }
// };

// // GET /getAll
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await userModel.find({}, "-password -otp -otpTimer");
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch users", error });
//   }
// };

// // DELETE /delete/:id
// exports.delete = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await userModel.findByIdAndDelete(id);

//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// };

// // GET /getAdmin - Admins only
// exports.getAdmins = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const admins = await userModel.find({ role: "admin" }, "-password -otp -otpTimer");
//     res.status(200).json(admins);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch admins", error });
//   }
// };

// // PATCH /active - Admins can mark other admins as active
// exports.markAdminActive = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const { id } = req.body;
//     const user = await userModel.findById(id);

//     if (!user || user.role !== "admin") {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     user.status = "active";
//     await user.save();

//     res.status(200).json({ message: "Admin marked as active" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to mark admin as active", error });
//   }
// };



// // DELETE /deleteAdmin - Admins can delete other admins
// exports.deleteAdmin = async (req, res) => {
//   try {
//     const { role } = req.user;
//     if (role !== "admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     const { taskId } = req.body;
//     const deletedAdmin = await userModel.findByIdAndDelete(taskId);

//     if (!deletedAdmin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     res.status(200).json({ message: "Admin deleted successfully" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ message: "Error deleting admin", error });
//   }
// };

// // Middleware for checking if user is an admin
// exports.isAdmin = (req, res, next) => {
//   const { role } = req.user;
//   if (role !== "admin") {
//     return res.status(403).json({ message: "Access denied. Admins only." });
//   }
//   next();
// };