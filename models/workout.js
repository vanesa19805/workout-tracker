const mongoose= require("mongoose");
const Schema= mongoose.Schema
const workoutSchema= new Schema({
    day:{
        type:Date,
        default:new Date().setDate(new Date().getDate())
    },
    exercises:{
        type:Array
    }
})



// the Workout is the collection and the workoutSchema is the skeleton
const Workout= mongoose.model("Workout",workoutSchema)

module.exports= Workout