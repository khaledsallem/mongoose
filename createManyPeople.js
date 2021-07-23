const mongoose = require("mongoose");
const Person = require('./models/personSchema')

let arrayPeople = [
    { name: "khaled", age: 30, favoriteFoods: ["pizza", "sushi"] },
    { name: "sam", age: 25, favoriteFoods: ["burger", "thai"] },
    { name: "ines", age: 35, favoriteFoods: ["tunisian", "italien"] }
];
const createManyPeople = function (arrayOfPeople, done) {
    Person.create(arrayOfPeople, (error, created) => {
        if (error) {
            console.log(error);
        } else {
            done(null, created);
        }
    });
};
createManyPeople(() => console.log("createManyPeople"));
module.exports = createManyPeople;