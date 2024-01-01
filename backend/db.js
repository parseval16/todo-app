const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://manoj:Manoj%40123@cluster0.sdisndk.mongodb.net/todos");


const todoSchema = new mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}