if (process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const indexroute = require("./routes/index")
const authorroute = require("./routes/authors")

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
app.use("/",indexroute)
app.use("/author",authorroute)

//porttututututuiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
app.listen(process.env.PORT || "3030")       