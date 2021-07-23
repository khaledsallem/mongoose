const express = require("express");
const mongoose = require("mongoose");
const Person = require('./models/personSchema')

var findPersonById = function (personId, done) {
    Person.findById("60f9d3a7ca77161cc4f17585", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    });
};

findPersonById(() => console.log("find the person by Id"));

module.exports = findPersonById