

  // Question: What does this code do??
  $.post("/api/html", answer)
        .then(function(data) {
        console.log("add.html", data);
    alert("Adding character...");
  });


$("#add-btn").on("click", function (event) {
    event.preventDefault();
    var dropdownOne = {
        1: $("#Q1").val(),
        2: $("#Q2").val(),
        3: $("#Q3").val(),
        4: $("#Q4").val(),
        5: $("#Q5").val(),
        6: $("#Q6").val(),
        7: $("#Q7").val(),
        8: $("#Q8").val(),
        9: $("#Q9").val(),
        10: $("#Q10").val()
    };

    $.post("/api/html", answer)
        .then(function(data){
            console.log("add.html", data);
        alert("adding answer...");
        });
});

    $("#survey").on("click",  function (event){
        event.preventDefault();
        location.href = "/survey"
})