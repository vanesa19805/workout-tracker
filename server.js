const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose");

//this uses the publid folder
app.use(express.static("public"));

//middleware data parce

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(require("./routes/htmlRoutes"))
app.use(require("./routes/apiRoutes"))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")


app.listen(PORT,function(){
console.log("app is listening on port", PORT )

})