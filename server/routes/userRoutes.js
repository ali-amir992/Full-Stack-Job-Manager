const express = require("express");
const router = express.Router();
const {
  updateOne,
  getOne,
  deleteOne,
} = require("../controllers/handlerFactory");

const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restriction,
  verify,
} = require("../controllers/authController");

const {
  getAllUsers,
  deleteMe,
  updateMe,
  uploadUserImage,
  resizeUserImage,

} = require("../controllers/userController");

const userModel = require("../models/userModel");
const { uploadToCloudinary, deleteUserImage } = require("../utils/cloudinary");

router.post("/signup", signUp);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:resetToken", resetPassword);
router.patch("/updatePassword", protect, updatePassword);
router.
  route("/verify/:token").
  get(verify)

router
  .route("/")
  .get(protect, restriction("admin"), getAllUsers)
  .delete(protect, deleteMe)
  .patch(protect, uploadUserImage, resizeUserImage, uploadToCloudinary, updateMe);

router
  .route("/:id")
  .get(getOne(userModel))
  .patch(protect, restriction("admin"), updateOne(userModel))
  .delete(protect, restriction("admin"), deleteUserImage, deleteOne(userModel));

module.exports = router;
