const express = require("express");
const mongoose = require("mongoose");
const Person = require('./models/personSchema')

const findOnePeople = function (food, done) {
    Person.findOne({ favouriteFoods: food }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
};

findOnePeople(() => console.log("the people was founded once"));

module.exports = findOnePeople