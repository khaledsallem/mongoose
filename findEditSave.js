const mongoose = require("mongoose")
const Person = require("./models/personSchema")


const findEditThenSave = (personId, done) => {
    const foodToAdd = 'hamburger';
    Person.findById({ _id: "60f9d3a7ca77161cc4f17585" }, (err, data) => {
        if (err) {
            console.error(err);
        }
        data.favoriteFoods.push(foodToAdd);
        data.save((err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(null, data);
        });
    });
};

findEditThenSave(() => console.log("find edit and save successfully"));
module.exports = findEditThenSave