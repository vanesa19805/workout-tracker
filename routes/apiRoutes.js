const router= require("express").Router();
const db=require("../models");

//CREATING THE CRUD FOR THE WORKOUTS W/ AGGREGATION
router.get("/api/workouts",function(req,res){
//    db.Workout.find().then(function(results){
//        res.json(results)
db.Workout.aggregate([
    {
        $addFields:{
            total

        }
    }
])



   })
})





router.put("/api/workouts/:id",function(req,res){
    db.Workout.findByIdAndUpdate({_id:req.params.id},{$push:{exercises:req.body}}).then(function(results){
        res.json(results)
    })
})

router.post("/api/workouts",function(req,res){
    db.Workout.create(req.body).then(function(results){
        res.json(results)
    })
})


router.get("/api/workouts/range",function(req,res){
    db.Workout.find().then(function(results){
        res.json(results)
    })
 })

 module.exports= router