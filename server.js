const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose");

//this uses the public folder
app.use(express.static("public"));

//middleware data parce

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// added the require app use for the complete routes
app.use(require("./routes/htmlRoutes"))
app.use(require("./routes/apiRoutes"))

//this connects to the mongo local host/workout 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")



















app.listen(PORT,function(){
console.log("app is listening on port", PORT )

})