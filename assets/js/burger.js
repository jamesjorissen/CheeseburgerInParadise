// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");
    var justDevoured = $(this).data("justDevoured");

    var newDevourState = {
      devoured: justDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devoured to", justDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var nextBurger = {
      name: $("#br").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: nextBurger
    }).then(
      function () {
        console.log("here is a new burger: ");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
