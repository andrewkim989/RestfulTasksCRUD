var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please enter the name of the task"],
    minlength: [2, "Tasks must be at least 2 characters long"]},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamps: true });

mongoose.model("Task", TaskSchema);