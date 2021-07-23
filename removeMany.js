const mongoose = require("mongoose")
const Person = require("./models/personSchema")

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove({ name: nameToRemove }, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(null, data);
    });
};

removeManyPeople(() => console.log("remove many successfully"))
module.exports = removeManyPeople