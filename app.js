const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Person = require("./models/personSchema")

//const newPerson = require("./newPerson")
//const findPeople = require("./findPerson")
//const createManyPeople = require("./createManyPeople")
//const findPeople = require("./findPeople")
//const findOnePeople = require("./findOnePeople")
//const findPersonById = require("./findPersonById")
//const findEditThenSave = require("./findEditSave")
//const findAndUpdate = require("./findUpdate")
//const removeById = require("./removeById")
//const removeManyPeople = require("./removeMany")

//environment variables
require("dotenv").config();
// const uri = process.env.MONGO_URI;
//database connection
mongoose.connect(
    "mongodb+srv://khaled:leatherdatabase2020@khaled.w1r1r.mongodb.net/databases?retryWrites=true&w=majority"
    , { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error"));
connection.once("open", () => {
    console.log("Connected to the Database Successfully");
});
app.get("/", (req, res) => {
    res.send("hello node js")
})

app.listen(4000, function (req, res) {
    console.log("Server is started on port 4000");
});
