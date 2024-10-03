const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  getUsers,
  logoutAdmin,
  getAdminProfile,
  getAllAdmins, // Import the new controller function
} = require("../controllers/adminController");
const router = express.Router();
const { protectAdmin } = require("../middlewares/authMiddleware");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", protectAdmin, logoutAdmin);
router.get("/users", protectAdmin, getUsers);
router.get("/me", protectAdmin, getAdminProfile);
router.get("/", protectAdmin, getAllAdmins); 

module.exports = router;
