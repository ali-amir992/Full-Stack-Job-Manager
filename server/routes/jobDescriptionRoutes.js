const express = require("express");
const router = express.Router();
const {
    updateOne,
    getOne,
    getAll,

} = require("../controllers/handlerFactory");

const { protect, restriction, isOwner } = require("../controllers/authController");
const jobDescriptionModel = require("../models/jobDescriptionModel");
const { createJobDescription, deleteJobDescription } = require("../controllers/jobDescriptionController");
const { isSubscribed } = require("../controllers/subscriptionController");

router.route("/")
    .post(protect, restriction("company", "student"), isSubscribed, createJobDescription)
    .get(protect, restriction("admin"), getAll(jobDescriptionModel))


router.route("/:id")
    .get(protect, getOne(jobDescriptionModel))
    .delete(protect, isOwner, deleteJobDescription)
    .patch(protect, isOwner, updateOne(jobDescriptionModel))


module.exports = router;
