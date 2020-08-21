$(function () {
  $("#createburger").on("submit", function (event) {
    event.preventDefault();

    var newBurg = {
      name: $("#bu").val().trim(),
    };
    console.log(newBurg);
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurg,
    }).then(function () {
      console.log("New Burger Added");
      location.reload();
    });
  });
});
