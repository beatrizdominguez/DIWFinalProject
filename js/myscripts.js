$(document).ready(function() {
	console.log("ready!");

	$("nav.navbar").animate({
		"transform" : "translate(50px,100px)",
		"transition" : "transform 500ms"
	});
//
//	$(".portfolio").click(function() {
//		alert("item clicked");
//	});

	$(".portfolio").mouseover(function() {
		$(this).find(".cover").fadeTo("slow", 0.7);
	});
	$(".portfolio").mouseout(function() {
		$(this).find(".cover").fadeTo("slow", 0);
	});

});

function showPanel(panel) {

	console.log(" ---- " + panel);
	console.log("do something");
	// hide all panels
	$(".panel").hide();

	// show this panel
	$(".panel-" + panel).show();
}

function selectSection(option) {
	$(".navbar-right li").removeClass("active");
	$(option).addClass("active");
	showPanel(option.id);
}

function changeColor(option) {

	$(option).find("p:first").toggleClass("blue_text");
	$(option).find("p:first").toggleClass("brown_text");

}
