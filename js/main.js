//Culture Generator flow in

$(document).ready(function(){
// $("#genr-box").hide();

});


$("#section3 button").on("click", function() {
console.log("blah")
	$("#genr-box").animate({
	"opacity": "1",
	// "width": "300px",
	// "height": "300px",
	}, 2000);
	$("#click").animate({
		"opacity": "0",

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


if (budget === "small") {
		$("#results").html("<ul> <span><li>TRY THESE:</li></span>  <li>-potluck</li> <li>-define employee career paths</li> <li>-team newsletter</li> <li>-training (leverage exisiting employee expertise)</li><li>-free meditation apps</li> <li>-transparent feedback/open communication</li> <li>-happy hour</li> <li>-watch ted talks</li> <li>-recognition of milestones</li> </ul>");
		console.log("blah");
	}

else if (budget === "medium") {
		$("#results").html("<ul> <span><li>TRY THESE:</li></span> <li>-purhcase meditation apps</li> <li>-yoga & wellness programs (see resources page)</li> <li>-mliestone gifts</li> <li>-seasonal gifts</li> <li>-company gear (business cards, mugs, shirts etc.)<li></ul>");
		console.log("blah");
	}

else if (budget === "large") {
		$("#results").html("<ul> <span><li>TRY THESE:</li></span> <li>-online recognition platform (points based or otherwise)</li> <li>-team getaways</li> <li>-paid happy hours/meals</li> <li>-speakers</li> <li>-discounted class & gym memberships</li> </ul>");
		console.log("blah");
	}


// if (size === "small" && budget === "small" && frequency === "once") {
// 		$("#results").html("<ul> <span><li>TRY THESE:</li></span>  <li>potluck</li> <li>define employee career paths</li> <li>team newsletter</li> <li>training (leverage exisiting employee expertise)</li><li>free meditation apps</li> <li>happy hour</li> <li>ted talks</li> </ul>");
// 		console.log("blah");
// 	}

// else if (size === "medium" && budget === "small" && frequency === "once") {
// 		$("#results").html("<ul> <li>TRY:</li> <li>free meditation apps</li> <li>happy hour</li> <li>ted talks</li> </ul>");
// 		console.log("blah");
// 	}

// else if (size === "large" && budget === "small" && frequency === "once") {
// 		$("#results").html("<ul> <li>TRY:</li> <li>free meditation apps</li> <li>happy hour</li> <li>ted talks</li> </ul>");
// 		console.log("blah");
// 	}

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
	
	// if current post if the last child then show the first one
	// update next post
	if (currentPost.is(":last-child")) {
		nextPost = $('.posts li').first();
	} else {
		nextPost = currentPost.next();
	}

	// add class active to next post
	nextPost.addClass("active");

	// remove active from current post
	currentPost.removeClass("active");


	// update current post
	currentPost = nextPost;

});


$("#left-arrow").on("click", function(){

	if (currentPost.is(":first-child")) {
		lastPost = $(".posts li").last();
	}
	// update next post
	else {
		lastPost = currentPost.prev();
	}

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
$("#lists ul").hide();
$("#website-list").toggle();
// $("#websites").animate({
// 	"opacity": .5,
// } 2000);

// });




});
// $("#website-list").css("width", "1000px");

	


$("#podcasts img").on("click", function(){
$("#lists ul").hide();
$("#podcasts-list").toggle();
});




$("#books img").on("click", function(){
$("#lists ul").hide();
$("#books-list").toggle();

});

$("#surveys img").on("click", function(){
$("#lists ul").hide();
$("#surveys-list").toggle();

});


