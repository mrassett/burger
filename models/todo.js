var orm = require("../config/orm.js");

var todofunction = {
  all: function(cb) {
    orm.all("todo", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("todo", [
      "what_todo", "done"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("todo", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = todofunction;
