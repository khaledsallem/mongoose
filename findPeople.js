const express = require("express");
const mongoose = require("mongoose");
const Person = require('./models/personSchema')


const findPeople = function (personName, done) {

    let query = Person.find({ name: personName })
    query.exec(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

findPeople(() => console.log("the data was founded"));

module.exports = findPeople