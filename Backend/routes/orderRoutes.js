const express = require("express");
const {
  placeOrder,
  getUserOrders,
  getAllOrders, 
} = require("../controllers/orderController");
const { protectAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", placeOrder);

router.get("/:userId", protectAdmin, getUserOrders);

router.get("/", protectAdmin, getAllOrders);

module.exports = router;
