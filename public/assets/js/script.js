$(document).ready(function() {
    
    $(".done-form").on("submit", function(event) {
      event.preventDefault();
  
      var todo_id = $(this).children(".todo_id").val();
      console.log(todo_id);
      $.ajax({
        method: "PUT",
        url: "/todos/" + todo_id
      }).then(function(data) {
        location.reload();
      });
  
    });
  });
  