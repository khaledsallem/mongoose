const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],
});

let Person = mongoose.model('Person', personSchema);
module.exports = Person;