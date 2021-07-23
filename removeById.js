const mongoose = require("mongoose");
const Person = require("./models/personSchema")


const removeById = (personId, done) => {
    Person.findByIdAndRemove("60f9d3a7ca77161cc4f17585", (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(null, data);
    });
};

removeById(() => console.log("find and remove successfully"));

module.exports = removeById