
const { companyModel } = require('../models/companyModel');
const catchAsync = require('../utils/catchAsync'); // Assuming you have a catchAsync utility
const AppError = require('../utils/AppError'); // Custom error handling
const Response = require('../utils/serverResponse'); // Standardized response utility
const performanceModel = require('../models/performanceModel');

exports.getPerformanceByCandidateId = catchAsync(async (req, res, next) => {
    const { candidateId } = req.params;

    // 1. Find the company linked to the authenticated user
    const company = await companyModel
        .findOne({ userId: req.user.id }) // Find company by userId
        .populate({
            path: 'candidates', // Populate candidates
            populate: {
                path: 'performance', // Populate performance details
                select: 'quizScore interviewScore confidenceScore', // Select relevant fields
            },
        })
        .select('candidates'); // Only select the candidates field

    // 2. Handle case where company is not found
    if (!company) {
        return next(new AppError('Company not found!', 404));
    }

    // 3. Find the candidate with the given candidateId
    const candidate = company.candidates.find((c) => c._id.toString() === candidateId);

    // 4. Handle case where candidate is not found
    if (!candidate) {
        return next(new AppError('Candidate not found!', 404));
    }

    return res.status(200).json(
        new Response('success', candidate)
    );
});


exports.addQuizResult = catchAsync(async (req, res, next) => {
    const { candidateId, companyId, quizScore } = req.body;

    const company = await companyModel.findById(companyId);
    if (!company) {
        return next(new AppError('Company not found', 404));
    }

    const candidate = company.candidates.id(candidateId);
    if (!candidate) {
        return next(new AppError('Candidate not found in this company', 404));
    }

    let newPerformance
    // Create a new performance record
    if (!candidate.performance) {
        newPerformance = await performanceModel.create({
            quizScore,
            jobDescription: candidate.jobDescription,
        });


        candidate.performance = newPerformance._id;
        await company.save();

    }
    else {
        newPerformance = await performanceModel.findByIdAndUpdate(candidate.performance, {
            quizScore,
        }, { new: true });
    }
    // Send response
    res.status(201).json(new Response("success", newPerformance));

});

exports.addInterviewResult = catchAsync(async (req, res, next) => {
    //call to AI model for verification of interview answers we will get answers in the req body and send it to AI model alongwith the questions and get the interview score from there
    const { candidateId, companyId, interviewScore, confidenceScore } = req.body;

    const company = await companyModel.findById(companyId);
    if (!company) {
        return next(new AppError('Company not found', 404));
    }

    const candidate = company.candidates.id(candidateId);
    if (!candidate) {
        return next(new AppError('Candidate not found in this company', 404));
    }

    let newPerformance
    // Create a new performance record
    if (!candidate.performance) {
        newPerformance = await performanceModel.create({
            interviewScore,
            confidenceScore,
            jobDescription: candidate.jobDescription,
        });


        candidate.performance = newPerformance._id;
        await company.save();

    }
    else {
        newPerformance = await performanceModel.findByIdAndUpdate(candidate.performance, {
            interviewScore,
            confidenceScore,
        }, { new: true });
    }
    // Send response
    res.status(201).json(new Response("success", newPerformance));
});
