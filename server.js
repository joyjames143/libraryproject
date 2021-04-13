if (process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const indexroute = require("./routes/index")

//initial setupssssssssssssssssssssssssssssssssssssss
app.set("view engine","ejs")
app.set("views" , __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("pubic"))

//clouddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
const mongoose = require("mongoose")
mongoose.connect(process.env.DatabaseUrl ,{useNewUrlParser:true, useUnifiedTopology: true} )
mongoose.connection.once("open",()=>console.log("connect airuchu"))

//routessssssssssssssssssssssssssssssssssssssssssssssssssssssssss
app.get("/",indexroute)

//porttututututuiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
app.listen(process.env.PORT || "3030")       