const mongoose = require("mongoose");
const Person = require('./models/personSchema')

let createAndSave = function (done) {
    let newPerson = new Person({
        name: "khaled",
        age: 30,
        favoriteFoods: ["pizza", "sushi"]
    })
    newPerson.save((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            done(null, data)
        }
    })
};

createAndSave(() => console.log('created successfully'));
module.exports = createAndSave