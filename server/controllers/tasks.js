const mongoose = require("mongoose");
var Task = mongoose.model("Task");

module.exports = {
    home: function(req, res) {
        Task.find({}, function(err, tasks) {
            if (err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({tasks});
            }
        })
    },

    show: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task){
            if (err){
               console.log("Returned error", err);
               res.json({message: "Error", error: err});
            }
            else {
               res.json({task});
            }
        })
    },

    create: function(req, res) {
        var title = req.body.title;
        var description = req.body.description;
        var completed = req.body.completed;
        var task = new Task({title: title, description: description, completed: completed});

        task.save(function(err){
            if(err){
                res.json({error: err});
            }
            else {
                res.json({task});
            }
        });
    },

    update: function(req, res) {
        Task.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, function(err, data){
            if (err) {
                console.log("Error. Data not found");
                res.json({message: "Error", error: err});
            }
            else{
                res.json({message: "Success", task: data});
            }
        });
    },

    delete: function (req, res) {
        Task.deleteOne({_id: req.params.id}, function (err) {
            if (err){
                res.json({message: "Error", error: err});
            }
            else {
                res.json({success: "Data deleted"});
            }
        })
    }
}