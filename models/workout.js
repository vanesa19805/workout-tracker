const mongoose = require("mongoose");
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            require: "please enter type of exercise"
        },
        name:{
            type: String,
            trim:true,
            require:"please enter name of exercise"
        },
        durantion:{
            type: Number,
            trim: true,
            require: "please enter duration in minutes"
        },
        weight:{
            type: Number
        },
        reps:{
            type:Number
        },
        sets:{
            type: Number
        },

    }]
})



// the Workout is the collection and the workoutSchema is the skeleton
const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout