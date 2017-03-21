var topics = ["cars", "landmarks", "poets", "museums", "monuments", "flowers", "seasons", "nba", "boat", "dolphin"];


function createButtons() {
	$("#sunsets-view").empty();
	for (var i = 0; i < topics.length; i++) {
		var b = $("<button>");
		b.attr("data-name", topics[i]);
		b.text(topics[i]);
		$("#sunsets-view").append(b);
	}

}

createButtons();


$("button").on("click", function(){
	var topicChoice = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topicChoice + "&api_key=dc6zaTOxFJmzC&limit=10";

     $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var imagesDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var topicsImage = $("<img>");
            topicsImage.attr("src", results[i].images.fixed_height.url);

            var topicsImageStill = $("<img>");
            topicsImageStill.attr("src", results[i].images.fixed_height_still.url);
            imagesDiv.append(p);
            imagesDiv.append(topicsImage);

            $("#sunsets-view").append(imagesDiv);
          
             $("img").on("click", function() {
                $(this).attr("src", results[i].images.fixed_width_still.url);

             })


        };

       
    });

// $("#sunsets-view").on("click", function () {
// 	$("img").stop();
	// var state = $(this).attr("data-state");
	// // var animate = $(".gif").attr("data-animate");
 //      if (state === "still") {
 //        $(this).attr("src", $(this).attr("data-animate"));
 //        $(this).attr("data-state", "animate");
 //      } else {
 //        $(this).attr("src", $(this).attr("data-still"));
 //        $(this).attr("data-state", "still");
 //      }

});




