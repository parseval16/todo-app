const mongoose = require('mongoose');

mongoose.connect("mongo-db url");


const todoSchema = new mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}