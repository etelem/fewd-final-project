//Culture Generator flow in

$(document).ready(function(){
// $("#genr-box").hide();

});


$("#section3 h5").on("click", function() {
console.log("blah")
	$("#genr-box").animate({
	"opacity": "1",
	// "width": "300px",
	// "height": "300px",
	}, 2000);
});


// OUTPUTS OF CULTURE GENERATOR

var size;
var budget;
var frequency;



$(document).ready(function(){
$(".submit").on("click", function(event){
	event.preventDefault();

	size = $("#org-size").val();
	budget = $("#budget").val();
	frequency = $("#frequency").val();

// starting with size/medium/large others 'small' and 'once'

if (size === "small" && budget === "small" && frequency === "once") {
		$("#results").html("<ul> <li>free meditation apps</li> <li>happy hour</li> <li>ted talks</li> </ul>");
		console.log("blah");
	}

else if (size === "medium" && budget === "small" && frequency === "once") {
		$("#results").text("free meditation apps," + " happy hour," + " ted talks");
		console.log("blah");
	}

else if (size === "large" && budget === "small" && frequency === "once") {
		$("#results").text("free meditation apps," + " happy hour," + " ted talks");
		console.log("blah");
	}

// size as medium

// else if (size === "large" && budget === "small" && frequency === "once") {
// 		$("#results").css("color","green");
// 		console.log("blah");
// 	}

else {
	$("#results").text("wrong");
}

});

});


$(".reset").on("click", function(){
$("#results").text("");
})
//use .html - than use "" and <ul>

// BLOG POST - .next


// $(document).ready(function(){
// $(".one").show();
// $(".two").hide();

// });

// $("#right-arrow").on("click", function(){
// $(".next").show();

// })

// Blog post loop



// var images=["images/post1.png","images/post2.png","images/post3.png"];
// var imgIndex = 0;


// function nextImage(){
//   if (imgIndex < images.length) {
//     imgIndex++;
//   } else {
//     imgIndex = 0;
//   }

// //   function prevImage(){
// //   if (imgIndex > images.length-1) {
// //     imgIndex--;
// //   } else {
// //     imgIndex = 0;
// // }

//   $("#main-image").attr("src", images[imgIndex]);
// }

// // on click next or prev find the next or prev image (using the functions created)
// $("#right-arrow").on("click",nextImage);
// // $("#left-arrow").on("click",prevImage);


// //use .next and .prev method instead

var currentPost = $(".posts li.active");
var nextPost;
var lastPost;

// check if a "next" post exists before updating everything
// if (nextPost) { }
$("#right-arrow").on("click", function(){
	// update next post
	nextPost = currentPost.next();

	// add class active to next post
	nextPost.addClass("active");

	// remove active from current post
	currentPost.removeClass("active");


	// update current post
	currentPost = nextPost;

});

$("#left-arrow").on("click", function(){
	// update next post
	lastPost = currentPost.prev();

	// add class active to next post
	lastPost.addClass("active");

	// remove active from current post
	currentPost.removeClass("active");


	// update current post
	currentPost = lastPost;

});




// Resources



$(document).ready(function(){
$("#website-list").hide();
$("#podcasts-list").hide();
$("#books-list").hide();
$("#surveys-list").hide();

});



$("#websites img").on("click", function(){
$("#website-list").toggle();
// $("#websites").animate({
// 	"opacity": .5,
// } 2000);

// });




});
// $("#website-list").css("width", "1000px");

	


$("#podcasts img").on("click", function(){
$("#podcasts-list").toggle();
});




$("#books img").on("click", function(){
$("#books-list").toggle();

});

$("#surveys img").on("click", function(){
$("#surveys-list").toggle();

});


