var wrestlers = [
	"the rock", 
	"hulk hogan", 
	"stone cold steve austin", 
	"macho man randy savage", 
	"ric flair",
	"the undertaker",
	"edge",
	"john cena",
	"aj styles",
	"sasha banks",
	"lita",
	"charlotte",
	"trish stratus",
	"broken matt hardy",
	"shinsuke nakamura"
];

var displayWord = [];

var wins = 0;

var lives = 9;

var secretWord;

var letter;

var currentWord = [];

document.onclick = function(event){
	lettersGuessed = [];
	displayWord = [];
	lives = 9;

	var message = "";
	document.querySelector('#message').innerHTML = message;

	secretWord = wrestlers[Math.floor(Math.random() * wrestlers.length)];
	currentWord = secretWord.split("");

	var index = wrestlers.indexOf(secretWord);
	if (index > -1){
		wrestlers.splice(index,1);
	}

	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === " ") {
			displayWord.push("&nbsp;");
		} else {
			displayWord.push("_");
		}
	}

	print();

}

document.onkeyup = function(event) {

	var start = String.fromCharCode(event.keyCode);
	letter = String.fromCharCode(event.keyCode).toLowerCase();

	lettersGuessed.push(letter);

	if (secretWord.indexOf(letter) > -1) {
		for (var i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === letter){
				displayWord[i] = letter;
			} else if (currentWord[i] === " ") {
				displayWord[i] = " ";
			}
		}
	} else {
		lives--;
	}

	if (arraysEqual(displayWord, currentWord)){
		message = "<h2>Congrats! Click to play again!</h2>";
		document.querySelector('#message').innerHTML = message;
		wins++;
	} else if (lives === 0){
		message = "<h2>Too bad, it was "+secretWord+". Click anywhere to play again!</h2>";
		document.querySelector('#message').innerHTML = message;
	}

	print();

}

function print (){
	var combinedWord = displayWord.join("");
	var lifeCount = "<p>" + lives + "</p>";
	var display = "<h1>" + combinedWord + "</h1>";
	var guessed = "<h1>" + lettersGuessed + "</h1>";
	var winCount = "<p>Wins: " + wins + "</p>";

	if (secretWord === "aj styles") {
		var photo = "<img id=\"hintImage\" src=\"assets/images/ajStyles.gif\">";
	} else if (secretWord === "charlotte"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/charlotte.gif\">";
	} else if (secretWord === "edge"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/edge.gif\">";
	} else if (secretWord === "hulk hogan"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/hulkHogan.gif\">";
	} else if (secretWord === "john cena"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/johnCena.gif\">";
	} else if (secretWord === "lita"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/lita.jpg\">";
	} else if (secretWord === "macho man randy savage"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/machoMan.gif\">";
	} else if (secretWord === "ric flair"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/ricFlair.gif\">";
	} else if (secretWord === "sasha banks"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/sashaBanks.gif\">";
	} else if (secretWord === "stone cold steve austin"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/stoneCold.gif\">";
	} else if (secretWord === "the rock"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/theRock.gif\">";
	} else if (secretWord === "the undertaker"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/theUndertaker.gif\">";
	} else if (secretWord === "trish stratus"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/trishStratus.jpg\">";
	} else if (secretWord === "broken matt hardy"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/mattHardy.gif\">";
	} else if (secretWord === "shinsuke nakamura"){
		var photo = "<img id=\"hintImage\" src=\"assets/images/shinsukeNakamura.gif\">";
	}

	document.querySelector('#lifeCount').innerHTML = lifeCount;
	document.querySelector('#display').innerHTML = display;
	document.querySelector('#guessed').innerHTML = guessed;
	document.querySelector('#winCount').innerHTML = winCount;
	document.querySelector('#imageArea').innerHTML = photo;
}

function arraysEqual(displayWord, currentWord) {
    for(var i = displayWord.length; i--;) {
        if(displayWord[i] !== currentWord[i])
            return false;
    }

    return true;
}