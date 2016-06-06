$(document).ready(function(){
	var Root_Url = window.location.href;
	var imgSearchLink = Root_Url+"search/freecodecamp";
	var offsetLink = Root_Url+"search/freecodecamp?offset=2"
	$("#imgSearch-link").text(imgSearchLink);
	$('#offset-link').text(offsetLink);
	var links = '<a target="_blank" href="'+imgSearchLink+'">Try First link</a><a target="_blank" href="'+offsetLink+'">Try Second link</a>'
	$("#try-it-search").append(links);
	var latestImgsLink = Root_Url+"images/latest";
	$("#latestImgs-link").text(latestImgsLink);
	links = '<a target="_blank" href="'+latestImgsLink+'">Try This link</a>'
	$("#try-it-latest").append(links);	
});