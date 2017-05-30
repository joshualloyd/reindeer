var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

var loopCount = reindeer.length;

var currentReindeer = "";

var currentColor = "";

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	currentColor = colors[loopTracker];
	currentReindeer = reindeer[loopTracker];
	var reindeerParagraphTag = document.createElement('p');
	var reindeerText = document.createTextNode(currentColor + ' ' + currentReindeer);
	reindeerParagraphTag.appendChild(reindeerText);
	hohohoElement.appendChild(reindeerParagraphTag);
}