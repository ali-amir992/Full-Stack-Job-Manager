const { companyModel, candidateSchema } = require("../models/companyModel");
const jobDescriptionModel = require("../models/jobDescriptionModel");
const performanceModel = require("../models/performanceModel");
const userModel = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Response = require("../utils/serverResponse");

exports.createJobDescription = catchAsync(async (req, res, next) => {
    //call to AI MODEL
    //call goes -> response returned as quiz,interview in json
    //create quiz and interview in database
    //store the job description now and return everything needed

    const doc = await jobDescriptionModel.create(req.body)
    await userModel.findByIdAndUpdate(req.user.id, {
        $push: { jobDescriptions: doc._id }
    })

    return res.status(200).json(new Response("success", doc))
})
exports.deleteJobDescription = catchAsync(async (req, res, next) => {
    const doc = await jobDescriptionModel.findByIdAndDelete(req.params.id)
    if (!doc)
        return next(new AppError("Document not found matching this id", 404))

    await userModel.findByIdAndUpdate(req.user.id, {
        $pull: { jobDescriptions: req.params.id }
    })

    await companyModel.updateOne(
        { userId: req.user.id }, // Filter companies with matching candidates
        {
            $pull: { candidates: { jobDescription: req.params.id } }, // Pull matching candidates
        }
    );

    await performanceModel.deleteMany({ jobDescription: req.params.id })
    return res.status(204).json(new Response("success", doc))
})