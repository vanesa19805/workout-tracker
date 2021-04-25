const router = require("express").Router();
const db = require("../models");

//CREATING THE CRUD FOR THE WORKOUTS W/ AGGREGATION
router.get("/api/workouts", function (req, res) {
    //    db.Workout.find().then(function(results){
    //        res.json(results)
    db.Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercise.duration" } } }
    ])
        .then(function (dbWorkout) { res.json(dbWorkout); })

        .catch((err) => {
            res.status(400).json(err);
        });
});


router.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate({ _id: req.params.id },
        { $push: { exercises: req.body }, $inc: { totalDuration: req.body.totalDuration } })
        .then(function (dbWorkout) {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", function (req, res) {
    db.Workout.create(req.body).then(function (dbWorkout) {
        res.json(dbWorkout)
    })
        .catch((err) => {
            res.status(400).json(err);
        });
});

//this is what you see in the dashboard total duration and pounds lifted

router.get("/api/workouts/range", function (req, res) {
    // db.Workout.find().then(function (results) {
    //     res.json(results)
    // })
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' },
                totalWeight: { $sum: '$exercises.weight' },
            },
        },
    ])
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router