const mongoose = require("mongoose")
const Person = require("./models/personSchema")

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate({ name: "khaled" }, { age: ageToSet }, { new: true }, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(null, data);
    });
};

findAndUpdate(() => console.log("find and update successfully"))

module.exports = findAndUpdate