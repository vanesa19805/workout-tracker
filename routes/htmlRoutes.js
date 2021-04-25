//display page
const router= require("express").Router()
const path= require("path")


//these paths are for each of the htmls paths 
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})
 router.get("/stats",function(res,res){
     res.sendFile(path.join(__dirname,"../public/stats.html"))
 });

 router.get("/exercise",function(req,res){
     res.sendFile(path.join(__dirname,"../public/exercise.html"))
 });

 module.exports= router