$(document).ready(function() {
  console.log("ready!");

  console.log("Hello World");

  // API key 9HWw2KaZlCDRlatDiVSxja1B2XreCRHU

  $("#submit").on("click", function(event) {
    console.log("clicked");
    event.preventDefault();
    var input = $("#input")
      .val()
      .trim();

    console.log(input);
  });
});
