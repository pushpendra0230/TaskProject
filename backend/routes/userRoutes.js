// const express = require("express");
// const router = express.Router();
// const userController = require("../controller/userController");
// const auth = require("../middleware/auth");

// router.post("/signup", userController.createUsers);
// router.post("/login", userController.login);
// router.get("/getAll", auth, userController.getAllUsers);
// router.delete("/delete/:id", userController.delete);

// module.exports = router;




const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");

// @route   POST /user/signup
// @desc    Register a user and send OTP
router.post("/signup", userController.createUsers);

// @route   POST /user/login
// @desc    Login user and send login email
router.post("/login", userController.login);

// @route   GET /user/getAll
// @desc    Get all users (requires auth)
router.get("/getAll", auth, userController.getAllUsers);

// @route   DELETE /user/delete/:id
// @desc    Delete a user by ID
router.delete("/delete/:id", userController.delete);

router.get("/getAdmin", auth, userController.getAdmins)

router.post("/verifyOtp", userController.verifyOtp)

router.post("/signup", userController.createUsers);

router.post("/login", userController.login);

router.delete("/deleteAdmin", auth, userController.deleteAdmin);

router.put("/edit/:id", userController.editUser);

module.exports = router;






// const express = require("express");
// const router = express.Router();
// const userController = require("../controller/userController");
// const auth = require("../middleware/auth");

// // @route   POST /user/signup
// // @desc    Register a user and send OTP
// router.post("/signup", userController.createUsers);

// // @route   POST /user/login
// // @desc    Login user and send login email
// router.post("/login", userController.login);

// // @route   GET /user/getAll
// // @desc    Get all users (requires auth)
// router.get("/getAll", auth, userController.getAllUsers);

// // @route   DELETE /user/delete/:id
// // @desc    Delete a user by ID
// router.delete("/delete/:id", userController.delete);

// // @route   GET /user/getAdmin
// // @desc    Get admin users (requires auth)
// router.get("/getAdmin", auth, userController.getAdmins);

// router.post("/verifyOtp", userController.verifyOtp);

// module.exports = router;