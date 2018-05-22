var express = require("express");

var router = express.Router();
var todo = require("../models/todo.js");

router.get("/", function(req, res) {
  res.redirect("/todo");
});

router.get("/todo", function(req, res) {

  todo.all(function(todoData) {
    res.render("index", { todo_data: todoData });
  });
});

router.post("/todo/create", function(req, res) {
  
  todo.create(req.body.what_todo, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/todo/:id", function(req, res) {
    todo.update(req.params.id, function(result) {
    console.log(result);

    res.sendStatus(200);
  });
});

module.exports = router;
