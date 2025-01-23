const express = require("express");
const router = express.Router();
const {
    updateOne,
    getOne,
    getAll,
    createOne,
    deleteOne,
} = require("../controllers/handlerFactory");

const { protect, restriction } = require("../controllers/authController");
const performanceModel = require("../models/performanceModel.js");
const { addQuizResult, addInterviewResult, getPerformanceByCandidateId } = require("../controllers/performanceController.js");
router.route("/")
    .post(protect, createOne(performanceModel))
    .get(protect, getAll(performanceModel))

router.route("/addQuizResult").post(addQuizResult)
router.route("/addInterviewResult").post(addInterviewResult)
router.route("/getPerformanceByCandidateId/:candidateId").get(protect, restriction("company"), getPerformanceByCandidateId)


router.route("/:id")
    .get(getOne(performanceModel))
    .delete(protect, deleteOne(performanceModel))


module.exports = router;
