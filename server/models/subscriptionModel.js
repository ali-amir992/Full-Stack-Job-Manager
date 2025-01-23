const mongoose = require("mongoose");
var validator = require("validator");
const crypto = require("crypto");

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, "title is required"],
    },
    active: {
        type: Boolean,
        default: true
    },
    availableTo: {
        type: String,
        enum: ["candidate", "company"]
    },
    noOfJobDescriptionsAvailable: {
        type: Number,
        default: 0
    },
    currentPeriodEnd: {
        type: Date,
        required: [true, 'End date is required for subscription']
    },
},
    { timestamps: true },
    {

        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })



//To provide efficient searching of mongodb
// subscriptionSchema.index({ SOMETHING : 1, SOMETHING: -1 }); //1 for ascending -1 for descending

//Document middlewares,can work before or after save or create
// Pre Save Hook
// subscriptionSchema.pre('save',function(next){
//     //query middleware
//     next()
// })

// subscriptionSchema.pre(/^find/,function(next){
//     //query middleware
//     next()
// })

//Post Save Hook
//The save hook doenst works for findAndUpdate and insertMany etc
// tourSchema.post('save', function (doc, next) {
//   next();
// });

//? Aggeregation Middleware, works before or after aggregation function
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: {  } });
//   next();
// });

// subscriptionSchema.methods.FUNCTIONNAME=function()
// {
//     //member functions
// }

//usually for child-parent referencing
module.exports = mongoose.model("Subscription", subscriptionSchema);






