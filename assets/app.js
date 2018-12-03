$(document).ready(function() {
  console.log("ready!");

  console.log("Hello World");
  // API key 9HWw2KaZlCDRlatDiVSxja1B2XreCRHU

  //onclick function to call API
  $("#submit").on("click", function(event) {
    console.log("clicked");

    //Storing user input as variable and inserting into query
    var input = $("#input")
      .val()
      .trim();

    console.log(input);

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      input +
      "&api_key=9HWw2KaZlCDRlatDiVSxja1B2XreCRHU&limit=12";

    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;
      console.log(results);

      //for loop to iterate through animal
      for (var i = 0; i < results.length; i++) {
        var gif =
          '<div class = "fluid container id = "gif"><img src= " ' +
          response.data[i].images.fixed_height_still.url +
          '" data-still=" ' +
          response.data[i].images.fixed_height_still.url +
          ' " data-animate=" ' +
          response.data[i].images.fixed_height.url +
          '" data-state="still" class = "animate"> </div';

        $(".layout").append(gif);
      } //for
    }); //then

    //function to animate gif on click
    $(document).on("click", ".animate", function() {
      var move = $(this).attr("data-state");
      if (move == "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      } //else
    });

    // DOM changes after submitting API request
    $("#box").css("margin-top", "0%");
    $("#box").css("margin-left", "0%");
    $("#input")
      .on("#input")
      .val("");
  });
});
