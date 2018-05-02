
    // Question: What does this code do?
    $("#add-btn").on("click", function(event) {
        event.preventDefault();
    var answer = {
         name: $("#name").val().trim(),
         role: $("#role").val().trim(),
         age: $("#age").val().trim(),
         forcePoints: $("#force-points").val().trim()
  };

  // Question: What does this code do??
  $.post("/api/html", answer)
        .then(function(data) {
        console.log("add.html", data);
    alert("Adding character...");
  });
});
