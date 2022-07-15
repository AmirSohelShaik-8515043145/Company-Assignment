const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./route/route.js")
const multer = require("multer")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

mongoose.connect("mongodb+srv://nasirhussain7878:llo5gS70CAxajLIs@cluster0.neahs.mongodb.net/group9Project5", { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.use("/", route);

app.listen(8080, function () {
    console.log("connected to port 8080")
})